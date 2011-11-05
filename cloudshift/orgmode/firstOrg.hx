
package cloudshift.orgmode;

import cloudshift.Core;
using cloudshift.Mixin;

import cloudshift.orgmode.Tokenizer;

import js.Node;

enum OrgConstruct {
  H1(h:String);
  H2(h:String);
  H3(h:String);
  TEXT(t:Array<String>,indent:Int);
  TABLE(t:Array<String>);
  UNORD(t:Array<String>,indent:Int);
  ORD(t:Array<String>,indent:Int);
  SRC(t:Array<String>);
}

enum EState {
  START;
}

class Org {

  static var supplyNext:OrgConstruct->Void;
  static var reH1 = ~/^\* (.*)$/;
  static var reH2 = ~/^\*\* (.*)$/;
  static var reH3 = ~/^\*\*\* (.*)$/;
  static var reTable = ~/^\|/;
  static var rePara = ~/^(\s*)(.*)$/;
  static var reUnOrd = ~/^(\s*)[-+\*](.*)$/;
  static var reOrd = ~/^(\s*)[0-9]\.?(.*)$/;
  static var reSrc = ~/^#\+BEGIN_SRC\s([a-zA-Z]*)/; // #+BEGIN_SRC haxe
  
  static var state = START;
  static var prevPos:{pos:Int,len:Int};
  static var para = [];
  static var tab = [];
  static var unord = [];
  static var ord =[];
  static var src = [];
  static var srcMode = false;
  static var indent:Int;
  
  static var matchers:Array<{name:String,re:EReg}> = [];
  
  public static function
  parse(f) {

    matchers.push({name:"h1",re:reH1});
    matchers.push({name:"h2",re:reH2});
    matchers.push({name:"h3",re:reH3});
    matchers.push({name:"src",re:reSrc});
    matchers.push({name:"unord",re:reUnOrd});
    matchers.push({name:"ord",re:reOrd});
    matchers.push({name:"tab",re:reTable});
    matchers.push({name:"para",re:rePara});

    prevPos = {pos:0,len:0};
    
    var contents = new String(Node.fs.readFileSync(f));
    contents = ~/\[\[(.*)\]\[(.*)\]\]/g.replace(contents,'<a href="$1">$2</a>');
    
    for (line in contents.split("\n")) {
      if (srcMode) {
        if (!line.startsWith("#+END_SRC"))
            src.push(line);
        else {
          srcMode = false;
          supplyNext(SRC(src));
        }
        
      } else {
        for (k in matchers) {
          var match = k.re.match(line);
          if (match) {
            var matchedPos =0;
            
            if (k.name != "para" || k.re.matched(1).length != indent)
              checkEndOfPara(matchedPos);
            if (checkChange(k.name,"tab"))
              checkEndOfTab(matchedPos);
            if (k.name != "unord" || k.re.matched(1).length != indent)
              checkEndOfUnOrd(matchedPos);
            if (k.name != "ord" || k.re.matched(1).length != indent)
              checkEndOfOrd(matchedPos);

            switch(k.name) {
            case "h1":
              supplyNext(H1(k.re.matched(1)));
            case "h2":
              supplyNext(H2(k.re.matched(1)));
            case "h3":
              supplyNext(H3(k.re.matched(1)));
            case "unord":
              indent = k.re.matched(1).length;
              unord.push(k.re.matched(2));
            case "ord":
              indent = k.re.matched(1).length;
              ord.push(k.re.matched(2));
            case "tab":
              tab.push(line);
            case "para":
              indent = k.re.matched(1).length;
              para.push(k.re.matched(2));
            case "src":
              srcMode = true;
            }
          
            prevPos = k.re.matchedPos();
            break; // don't match same line twice
          } 
        }
      }
    }
  }

  public static inline function
  checkChange(name,cons) {
    return (name != cons);
  }
  
  public static function
  next(cb:OrgConstruct->Void) {
    supplyNext = cb;
  }

  public static function
  checkEndOfPara(matchedPos) {
    if (para.length > 0) {
      supplyNext(TEXT(para,indent));
      para = [];
    }
  }

  public static function
  checkEndOfTab(matchedPos) {
    if (tab.length > 0) {
      supplyNext(TABLE(tab));
      tab = [];
    }
  }

  public static function
  checkEndOfUnOrd(matchedPos) {
    if (unord.length > 0) {
      supplyNext(UNORD(unord,indent));
      unord = [];
    }
  }

  public static function
  checkEndOfOrd(matchedPos) {
    if (ord.length > 0) {
      supplyNext(ORD(ord,indent));
      ord = [];
    }
  }

  public static function
  checkEndOfSrc(matchedPos) {
    if (src.length > 0) {
      supplyNext(SRC(src));
      src = [];
    }
  }

  
}