package cloudshift.orgmode;

import cloudshift.orgmode.Reader;

typedef Info = { line:Int,col:Int};

typedef Converter<T> = EReg->T;

typedef Token<T> = {
	var recogniser:EReg;
	var converter:Converter<T>;
}

private typedef IToken<T> = {> Token<T> ,
  var pushback:Int;
  var discard:Bool;
  var modeOnly:Bool;
}

enum SynOptions {
  Push(i:Int);
  Discard;
  ModeChange;
}

enum SynStyle {
  LINE;
  CHUNK;
}

enum SynChunkSelect {
  NextChunk;
  ModChunk(m:Int);
  SameChunk;
}

class Lexer<T> {
  static var EOF = -1;
  static var DEFAULT_CHUNK_SIZE = 512;
  
  var reader:Reader;
  var style:SynStyle;
  var curChar:Int;
  var lineNo:Int;
  var lineStart:Int;
  var lineLen:Int;
  var startCh:Int;
  var curLine:StringBuf;
  //  var recognisedTokens:Array<IToken<T>>;
  var curGroup:String;
  var eof:Bool;
  var totalLength:Int;
  var leftOver:String;
  var chunker:Void->String;
  var charCodeAt:Int->Int;
  var inChunk:Int;
  var tokenGroups:Hash<{matchers:Array<IToken<T>>,finaliser:String->T}>;
  var markBuffer:Array<String>;
  var grpStack:Array<String>;
  var matchedRE:EReg;
  
  public function new(rd:Reader,?s:SynStyle) {
    tokenGroups = new Hash();
    curGroup = "default";
    tokenGroups.set(curGroup,{matchers:[],finaliser:null});
    grpStack = [];
    reader = rd;
    curChar = 0;
    lineNo = 0;
    lineStart = 0;
    lineLen = 0;
    startCh = 0;
    eof = false;
    curLine = new StringBuf();
    leftOver = "";
    style = (s == null) ? CHUNK : s;

    if (rd.canChunk() && style == CHUNK) {
      chunker = reader.nextChunk;
    } else {
      chunker = lineChunk;
    }
      
    charCodeAt = reader.charCodeAt;
  }

  public function
  match(re:EReg,conv:Converter<T>,?options:Dynamic) {
    var matcher = {recogniser:re,converter:
                   conv,pushback:0,
                   discard:false,
                   modeOnly:false};

    if (options != null) {
      var opts:Array<SynOptions> = (!Std.is(options,Array)) ? [options] : options;
      for (o in opts) {
        switch(o) {
        case Push(pb): matcher.pushback = pb;
        case Discard: matcher.discard = true;
        case ModeChange:matcher.modeOnly = true;
        }
      }
    
    }

    grp().matchers.push(matcher);
    return this;
  }

  public function matchedEReg():EReg {
    return matchedRE;
  }

  inline function grp() {
    return tokenGroups.get(curGroup);
  }
  
  public function
  nomatch(cb:String->T) {
    grp().finaliser = cb;
    return this;
  }

  public function
  group(name:String) {
    var
      rt  = tokenGroups.get(name);
    
    if (rt == null) {
      rt = {matchers:[],finaliser:null};
      tokenGroups.set(name,rt);
    }

    curGroup = name;
    
    return this;
  }

  public function getGroup() {
    return curGroup;
  }
  
  public function
  use(?name:String) {
    if (name != null) {
      var rt = tokenGroups.get(name);
      if (rt == null)
        throw "Token group :"+name+" does not exist";

      //      trace("----------------------");
      //trace("||| group = "+curGroup);
      grpStack.push(curGroup);
      curGroup = name;
      
      //      trace("******** using group :"+curGroup);
    } else {
      curGroup = if (grpStack.length > 0) {
        grpStack.pop();
      } else
        "default";
      
      //      trace("****** reverting to group:"+curGroup);
    }
      
    return this;
  }

  public function
  removeGroup(name:String) {
    //tokenGroups.matchers.remove(name);
    return this;
  }

  public function
  mark() {
    markBuffer = [];
  }

  public function
  yank():String {
    if (markBuffer != null) {
      var y = markBuffer;
      markBuffer = null;
      return y.join("");
    }
    return "!yank buffer empty";
  }
  
  public inline function
  isNL(c) {
    return c == 10;
  }

  public inline function
  column() {
    return fromBOL()+inChunk;
  }

  public inline function
  info():Info {
    return {line:lineNo,col:column()};
  }

  public inline function atEof() {
    return reader.atEof();
  }
  
  public function
  nextChar() {
    var nc = charCodeAt(curChar);
    
    if (isNL(nc)) {
        
#if debug
      trace(">>"+":"+lineNo+"("+curChar+"): "+curLine.toString()+"<");
        curLine = new StringBuf();
#end
        lineStart = curChar + 1;
        lineNo++;
    } else {      
#if debug
      if (nc != EOF)
        curLine.addChar(nc);
#end
    }
    
    curChar++;
    return nc;
  }
  
  function lineChunk() {
    var
      sb = new StringBuf(), c;
    
    while ((c = nextChar()) != -1) {

      sb.addChar(c);
      if (c == 10) {
        break;
      }

    }

    var s = sb.toString();
    lineLen = s.length;
    return s;
  }

  function withChunks(chunk:String,fn:String->SynChunkSelect) {

    if(chunk == "") {
      chunk = chunker();
    }
    
    do {
      switch(fn(chunk)) {
      case NextChunk:
        if (atEof()) {          
          break;
        }
        
        if (markBuffer != null) {
          markBuffer.push(chunk);
        }
        
        if (style == LINE) 
          chunk = chunker(); // no match, get new line
        else
          chunk += chunker(); // no match, extend chunk
      case ModChunk(np):
        if (np > 0) {
          // discard the beginning of chunk (default)
          startCh = chunk.length;
          if (markBuffer != null) {
            markBuffer.push(chunk.substr(np));
          }
          chunk = chunk.substr(np); 
        } else {
            // discard the end of the chunk - only with Discard option
            chunk = chunk.substr(0,-np);
            lineLen = chunk.length;
        }
        break;
      case SameChunk:
        break;
      }
    } while (true);

    return chunk;
  }

  public function
  fromBOL() {
    return lineLen - startCh;
  }
  
  public function
  nextToken() {
    var
      tok = null;
    
    leftOver = withChunks(leftOver,function(chunk) {
          for (rt in grp().matchers) {
              if (rt.recogniser.match(chunk)) {
                  matchedRE = rt.recogniser;
                  var p = rt.recogniser.matchedPos();
                  tok = rt.converter(rt.recogniser);
                  if (tok != null) {
                    if (rt.modeOnly) {
                      return SameChunk;
                    }
                    inChunk = p.pos;
                    var np = (rt.discard) ? -p.pos : p.pos + p.len + rt.pushback;
                    return ModChunk(np);
                  }
              }
          }
          if (tok == null && grp().finaliser != null) {              
              tok = grp().finaliser(chunk);
              return SameChunk;
              if (tok == null) {
                //still not recognised
              }
          } else
            return NextChunk;
      });
    
    return tok;
  }

  public function iterator():Iterator<T> {
    var
      t = null,
      me = this;
    
    return {
    hasNext: function() {
        t = me.nextToken();
        return t != null;
      },
    next: function() {
        return t;
      }
    }
  }
  
  public inline function
  prevChar() {
    return reader.charCodeAt(curChar-1);
  }
  
  public inline function
  readAssert(expected:T) {
    var tok = nextToken();
    if (tok != expected) throw "expected:" + expected + " got "+tok;
    return tok;
  }
  
  public function
  syntax(msg:String) {
    trace("At line "+lineNo+" col "+column()+": "+msg);
    //Os.exit(1);
  }
}


















