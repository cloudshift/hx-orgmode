
package cloudshift.orgmode;

import cloudshift.Core;
using cloudshift.Mixin;

import cloudshift.orgmode.Lexer;
import cloudshift.orgmode.Reader;

import js.Node;

enum OrgTokens {
  TPARA;
  TH1(h:String);
  TH2(h:String);
  TH3(h:String);
  TTEXTSTART(s:String);
  TTEXTNEXT(s:String);
  TTEXTEND(s:String);
  TTABLESTART;
  TTABLEROW(s:String);
  TTABLEEND;
  TUNORDSTART(t:String,indent:Int);
  TUNORDNEXT(t:String,indent:Int);
  TUNORDCONTINUE(t:String);
  TUNORDEND;
  TORDSTART(t:String,indent:Int);
  TORDNEXT(t:String,indent:Int);
  TORDCONTINUE(t:String);
  TORDEND; 
  TSRCSTART(type:String);
  TSRCEND(src:Array<String>);
  TBOLD(s:String);
  TUNDERLINE(s:String);
  TIGNORE;
  TURL(url:String,desc:String);
}

enum OrgConstruct {
  PARA;
  H1(h:String);
  H2(h:String);
  H3(h:String);
  TABLE(t:Array<String>);
  TEXTSTART(t:String);
  TEXT(t:String);
  TEXTEND(t:String);
  SRC(t:Array<String>);
  ORD(t:Array<String>);
  UNORD(t:Array<String>);
  BOLD(s:String);
  UNDERLINE(s:String);
  URL(url:String,desc:String);
}

enum Context {
  NORM;
  LIST;
  PARA;
}

class Org {

  static var reH1 = ~/^\s*\* (.*)\n/;
  static var reH2 = ~/^\s*\*\* (.*)\n/;
  static var reH3 = ~/^\*\*\* (.*)\n/;
  static var reTable = ~/^\s*\|(.*)/;
  static var reWord = ~/^ ?(\S* )\n?/;
  static var reEOL = ~/(.+)\n$/;
  static var reEOP = ~/^\n$/;
  static var reUnOrd = ~/^(\s*)[-+]([\S ]+)\n/;
  static var reOrd = ~/^(\s*)[0-9]\.?(.*)/;
  static var reSrc = ~/^\s*#\+BEGIN_SRC\s([a-zA-Z]*)/; // #+BEGIN_SRC haxe
  static var reUnderline = ~/^\s*_(.*?)_\n?/;
  static var reBold = ~/^\s*\*(.*?)\*\n?/;
  static var reLine = ~/^(\s*)(.*)\n$/;
  static var reUrl = ~/\s*\[\[(.*?)\]\[(.*?)\]\]\n?/;
  
  static var context : Array<Context> = [NORM];
  static var tab = [];
  static var unord = [];
  static var ord =[];
  static var src = [];
  static var indent:Int;
  
  public static function
  lex(f) {
    var tk = new Lexer<OrgTokens>(new StringReader(f),LINE);    
    tk.match(reEOP,function(re) {
          return TPARA;
      })
      .match(reH1,function(re) {
        return TH1(re.matched(1));
      })
      .match(reH2,function(re) {
          return TH2(re.matched(1));
        })
      .match(reH3,function(re) {
          return TH3(re.matched(1));
        })
      .match(reTable,function(re) {
          return TTABLESTART;
        })
      .match(reUrl,function(re) {
          return TURL(re.matched(1),re.matched(2));
        })
       .match(reSrc,function(re) {
          tk.mark();
          return TSRCSTART(re.matched(1));
        })
      .match(reUnOrd,function(re) {
          //          trace("ord start:"+re.matched(0));
          indent = re.matched(1).length+2;
          return TUNORDSTART(re.matched(2),re.matched(1).length);
        })
      .match(reOrd,function(re) {
          return TORDSTART(re.matched(2),re.matched(1).length);
        })
      .match(reWord,function(re) {
          return TTEXTSTART(re.matched(1));
        })
      .group("table")
      .match(reTable,function(re) {
          return TTABLEROW(re.matched(1));
        })
      .nomatch(function(s) {
          return TTABLEEND;
        })
      // -----------------------------
      .group("text")
      .match(reBold,function(re) {
          return TBOLD(re.matched(1));
        })
      .match(reUnderline,function(re) {
          return TUNDERLINE(re.matched(1));
        })
      .match(reUrl,function(re) {
          return TURL(re.matched(1),re.matched(2));
        })
      .match(reWord,function(re) {
          //          var i = re.matched(1).length;
          //          trace("matching word:"+re.matched(1));
          return TTEXTNEXT(re.matched(1));
        })
      .match(reEOL,function(re) {
          var s = re.matched(1);
          if (s == null) s = "";
          return TTEXTNEXT(s+" ");
        })
      .match(reEOP,function(re) {
          return TTEXTEND("");
        })
      
      .nomatch(function(s) {
          return TTEXTEND("____");
        })

      // --------------------------------
      .group("src")
      .match(~/^\s*#\+END_SRC.*/,function(re) {
          return TSRCEND(tk.yank());
        })
      
      // --------------------------------
      .group("unord")
      .match(reUnOrd,function(re) {
          indent = re.matched(1).length+2;
          return TUNORDNEXT(re.matched(2),re.matched(1).length);
        })
            
      .match(reEOP,function(re) {
          //          trace("UNORDEND1");
          return TUNORDEND;
        })
      .nomatch(function(s) {
          if (reLine.match(s)) {
            if (reLine.matched(1).length == indent) {
              return TUNORDCONTINUE(reLine.matched(2));
            }
          }
          return TUNORDEND;
        })
      
      // --------------------------------
      .group("ord")
      .match(reOrd,function(re) {
          return TORDNEXT(re.matched(2),re.matched(1).length);
        })
      .match(reLine,function(re) {
          return TORDCONTINUE(re.matched(1));
        })
      .match(reEOP,function(re) {
          return TORDEND;
        })
      .nomatch(function(s) {
          return TORDEND;
        })
      .use("default");

    return tk;
  }

  public static function
  parse(contents,supplyNext:OrgConstruct->Void) {
    var lexer = Org.lex(contents);    
    for (t in lexer) {
      switch(t) {
      case TPARA:
        supplyNext(PARA);
      case TH1(s):
        supplyNext(H1(s));
      case TH2(s):
        supplyNext(H2(s));
      case TH3(s):
        supplyNext(H3(s));
      case TTABLESTART:
        lexer.use("table");
      case TTABLEROW(r):
        tab.push(r);
      case TTABLEEND:
        supplyNext(TABLE(tab));
      case TTEXTSTART(s):
        supplyNext(TEXTSTART(s));
        lexer.use("text");
      case TTEXTNEXT(s):
        //para.push(s);
          supplyNext(TEXT(s));
      case TTEXTEND(s):
        //supplyNext(TEXT(para));
        supplyNext(TEXTEND(s));
        lexer.use();
      case TSRCSTART(type):
        lexer.use("src");
      case TSRCEND(src):
        supplyNext(SRC(src));
        lexer.use();
      case TUNORDSTART(s,i):
        unord = [];
        unord.push(s);
        lexer.use("unord");
      case TUNORDNEXT(s,i):        
        unord.push(s);
      case TUNORDCONTINUE(s):
        unord[unord.length-1] = unord.last() + s;
      case TUNORDEND:
        supplyNext(UNORD(unord));
        lexer.use();
      case TORDSTART(s,i):
        ord = [];
        ord.push(s);
        lexer.use("ord");
      case TORDNEXT(s,i):
        ord.push(s);
      case TORDCONTINUE(s):
        ord[ord.length-1] = ord.last() + s;
      case TORDEND:
        supplyNext(ORD(ord));
      case TBOLD(s):
        supplyNext(BOLD(s+" "));
      case TUNDERLINE(s):
        supplyNext(UNDERLINE(s+" "));
      case TIGNORE:
      case TURL(u,d):
        supplyNext(URL(u,d));
      }
    }    
  }
  
}