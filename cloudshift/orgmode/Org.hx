
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
  TTEXTWORD(s:String);
  TTEXTEOL;
  TTABLESTART(s:String);
  TTABLEROW(s:String);
  TTABLEEND;
  TUNORDSTART;
  TUNORDEND;
  TORDSTART(indent:Int);
  TCODE(type:String);
  TSRCSTART(type:String);
  TSRCEND(src:String);
  TBOLD(s:String);
  TUNDERLINE(s:String);
  TIGNORE;
  TURL(url:String,desc:String);
  TINCLUDE(url:String);
  TMETA_TITLE(t:String);
  TMETA_DESC(d:String);
  TMETA_AUTHOR(d:String);
  TMETA_DATE(d:String);
  TMETA_KEYWORD(d:String);
  TMETA_INDEX(d:String);
}

enum OrgConstruct {
  PARA;
  PARACLOSE;
  H1(h:String);
  H2(h:String);
  H3(h:String);
  TABLESTART(s:String);
  TABLE(t:Array<String>);
  TEXTSTART(t:String);
  TEXT(t:String);
  TEXTEND(t:String);
  SRC(t:String);
  UNORDSTART;
  UNORDEND;
  ORDSTART;
  ORDEND;
  LISTITEMSTART;
  LISTITEMEND;
  BOLD(s:String);
  UNDERLINE(s:String);
  URL(url:String,desc:String);
}

enum Context {
  CPARA;
  CLIST;
}

enum ListType {
  ORD;
  UNORD;
}

/*
#+TITLE: the title to be shown (default is the buffer name)
#+AUTHOR: the author (default taken from user-full-name)
#+DATE: a date, fixed, of a format string for format-time-string
#+EMAIL: his/her email address (default from user-mail-address)
#+DESCRIPTION: the page description, e.g. for the XHTML meta tag
#+KEYWORDS: the page keywords, e.g. for the XHTML meta tag
*/

typedef Meta = {
  var title:String;
  var author:String;
  var date:String;
  var email:String;
  var desc:String;
  var keywords:String;
  var index:String;
}


class Org {

  static var reH1 = ~/^\s*\* (.*)/;
  static var reH2 = ~/^\s*\*\* (.*)/;
  static var reH3 = ~/^\*\*\* (.*)/;
  static var reTable = ~/^\s*\|(.*?)\n/;
  static var reWord = ~/^\s*(\S+)/;
  static var reEOL = ~/\n$/;
  static var reEOP = ~/^\n$/;
  static var reUnOrd = ~/^(\s*)[-+]/;
  static var reOrd = ~/^(\s*)[0-9]+?\./;
  static var reSrc = ~/^\s*#\+BEGIN_SRC\s([a-zA-Z]*)/; // #+BEGIN_SRC haxe
  static var reTitle = ~/^\s*#\+TITLE\s(.*?)\n/;
  static var reDesc = ~/^\s*#\+DESCRIPTION\s(.*?)\n/;
  static var reAuthor = ~/^\s*#\+AUTHOR\s(.*?)\n/;
  static var reDate = ~/^\s*#\+DATE\s(.*?)\n/;
  static var reKeyword = ~/^\s*#\+KEYWORD\s(.*?)\n/;
  static var reIndex = ~/^\s*#\+INDEX\s(.*?)\n/;
  static var reInclude = ~/^\s*#\+INCLUDE:\s"(.*?)"\n/;

  // text group
  static var reCode = ~/^\s*=(.+)=/;
  static var reUnderline = ~/^\s*_(.+?)_/;
  static var reBold = ~/^\s*\*(.+?)\*/;
  static var reUrl = ~/^\s*\[\[(.+?)\]\[(.+?)\]\]/;
  static var reUrlRaw = ~/^\s*(https?:\/\/\S+)/;
  
  static var tab = [];
  static var ord =[];
  static var src = [];
  static var indent:Int;

  static var context:Context = CPARA;
  static var paraOpen:Bool;
  static var listType:ListType;

  static var meta:Meta ;
  
  public static function
  lex(f) {
    var tk = new Lexer<OrgTokens>(new StringReader(f),LINE);    
    tk
      .match(reTitle,function(re) {
          return TMETA_TITLE(re.matched(1));
        })
      .match(reDesc,function(re) {
          return TMETA_DESC(re.matched(1));
        })
      .match(reDate,function(re) {
          return TMETA_DATE(re.matched(1));
        })
      .match(reKeyword,function(re) {
          return TMETA_KEYWORD(re.matched(1));
        })
      .match(reIndex,function(re) {
          return TMETA_INDEX(re.matched(1));
        })
      .match(reInclude,function(re) {
          return TINCLUDE(re.matched(1));
        })
      .match(reSrc,function(re) {
          tk.mark();
          return TSRCSTART(re.matched(1));
        })
      .match(reAuthor,function(re) {
          return TMETA_AUTHOR(re.matched(1));
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
          return TTABLESTART(re.matched(1));
        })
      .match(reUrl,function(re) {
          return TURL(re.matched(1),re.matched(2));
        })
      .match(reUrlRaw,function(re) {
          return TURL(re.matched(1),re.matched(1));
        })
      .match(reUnOrd,function(re) {
          return TUNORDSTART;
        })
      .match(reOrd,function(re) {
          return TORDSTART(re.matched(1).length);
        })
      .match(reEOP,function(re) {
          return TPARA;
        })
      .match(reWord,function(re) {
          return TTEXTSTART(re.matched(1));
        },[ModeChange])
      
      // ------------------------------
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
      .match(reCode,function(re) {
          return TCODE(re.matched(1));
        })
      .match(reUnderline,function(re) {
          return TUNDERLINE(re.matched(1));
        })
      .match(reUrl,function(re) {
          return TURL(re.matched(1),re.matched(2));
        })
      .match(reUrlRaw,function(re) {
          return TURL(re.matched(1),re.matched(1));
        })
      .match(reWord,function(re) {
          return TTEXTWORD(re.matched(1));
       })
      .match(reEOL,function(re) {
          return TTEXTEOL;
        })
      .match(reEOP,function(re) {
          return TPARA;
      })

      // --------------------------------
      .group("src")
      .match(~/^\s*#\+END_SRC.*/,function(re) {
          return TSRCEND(tk.yank());
        })
      .use("default");

    return tk;
  }

  public static function
  parse(contents,supplyNext:OrgConstruct->Void,metaFile:String=null) {
    var
      meta:Meta = {
        title:"",
        author:"",
        email:"",
        date:"",
        desc:"",
        keywords:"",
        index:""
    };
    
    var checkPara = function() {
        if (paraOpen) {
            supplyNext(PARACLOSE);
            paraOpen = false;
        }
    }
    
    var lexer = Org.lex(contents);    
    for (t in lexer) {
      #if debug
      js.Node.process.stdout.write(t+", "+context +"-"+lexer.getGroup()+"\n");
      #end
      switch(t) {
      case TPARA:
        
        switch(context) {
        case CPARA:
          checkPara();
          supplyNext(PARA);
        case CLIST:
          if (listType ==UNORD)
              supplyNext(UNORDEND);
          else
              supplyNext(ORDEND);

          checkPara();
          supplyNext(PARA);
        }

        paraOpen = true;
        context = CPARA;
        //lexer.use();
      case TH1(s):
        checkPara();
        supplyNext(H1(s));
      case TH2(s):
        checkPara();
        supplyNext(H2(s));
      case TH3(s):
        checkPara();
        supplyNext(H3(s));
      case TTABLESTART(s):
        checkPara();
        supplyNext(TABLESTART(s));
        lexer.use("table");
      case TTABLEROW(r):
        tab.push(r);
      case TTABLEEND:
        supplyNext(TABLE(tab));
        lexer.use();
      case TTEXTSTART(s):
        /*
        switch(context) {
        case CPARA:
          supplyNext(TEXTSTART(s));
        case CLIST:
          supplyNext(TEXT(s));
        }
        */
        lexer.use("text");
      case TTEXTWORD(s):
          supplyNext(TEXT(s));
      case TTEXTEOL:
        switch(context) {
        case CPARA:
          supplyNext(TEXT(" "));
        case CLIST:
          //        supplyNext(LISTITEMEND);
        }
         lexer.use();
      case TSRCSTART(type):
        lexer.use("src");
      case TSRCEND(src):
        supplyNext(SRC(src));
        lexer.use();
      case TUNORDSTART:
        checkPara();
        switch(context) {
        case CPARA:
          listType = UNORD;
          supplyNext(UNORDSTART);
          supplyNext(LISTITEMSTART);
          context = CLIST;
          lexer.use("text");
        case CLIST:
          supplyNext(LISTITEMSTART);
        }
      case TUNORDEND:
        context = CPARA;
        supplyNext(UNORDEND);
        lexer.use();
      case TORDSTART(i):
        checkPara();
        switch(context) {
        case CPARA:
          listType = ORD;
          supplyNext(ORDSTART);
          supplyNext(LISTITEMSTART);
          context = CLIST;
          lexer.use("text");
        case CLIST:
          supplyNext(LISTITEMSTART);
        }
      case TCODE(s):
        supplyNext(SRC(s));
      case TBOLD(s):
        supplyNext(BOLD(s));
      case TUNDERLINE(s):
        supplyNext(UNDERLINE(s));
      case TIGNORE:
      case TURL(u,d):
        supplyNext(URL(u,d));

      case TMETA_TITLE(t):
        meta.title = t;      
      case TMETA_DESC(t):
        meta.desc = t;
      case TMETA_AUTHOR(t):
        meta.author = t;
      case TMETA_DATE(d):
        meta.date = d;
      case TMETA_KEYWORD(d):
        meta.keywords = d;
      case TMETA_INDEX(d):
        meta.index = d;
      case TINCLUDE(fileName):
        var f = null;
        try {
          f = new String(js.Node.fs.readFileSync(fileName));
        } catch(ex:Dynamic) {
          f = fileName+" not found!";
        }
        supplyNext(SRC(f));
      }
      
    }
    if (metaFile != null) {
      js.Node.fs.writeFileSync(metaFile,js.Node.stringify(meta));
    }
  }
  
}