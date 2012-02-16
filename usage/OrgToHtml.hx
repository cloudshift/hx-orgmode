
import cloudshift.Core;
using cloudshift.Mixin;

import cloudshift.orgmode.Org;

class OrgToHtml {

  public static function
  main() {
    //Org.next(html);
    var contents = new String(js.Node.fs.readFileSync(js.Node.process.argv[2]));

    var metaFile = null;
    if (js.Node.process.argv.length == 4) {
      metaFile = js.Node.process.argv[3];
    }
    
    #if !debug
    Org.parse(contents,html,metaFile);
    #else
    Org.parse(contents,function(p){},metaFile);
    #end
  }

  
  public static function
  html(cons) {
    var print = function(s) {
        js.Node.process.stdout.write(s) ;
    }
        
    switch(cons) {
    case PARA:
      print("<p>");
    case PARACLOSE:
      print("</p>");
    case H1(s):
      print("<h1>"+s+"</h1>");
    case H2(s):
      print("<h2>"+s+"</h2>");
    case H3(s):
      print("<h3>"+s+"</h3>");
    case TEXTSTART(s):
      print(s);
    case TEXT(s):
      print(" "+s+" ");
    case TEXTEND(s):
      print(s+"</p>");
    case SRC(s):
      print("<pre>"+s.htmlEscape()+"</pre>");
    case TABLESTART(s):
      print("<table>");
      tableRows(print,[s],true);
    case TABLE(s):
      tableRows(print,s.slice(1));
      print("</table>");
    case UNDERLINE(s):
      print('<span style="text-decoration:underline">'+s+'</span>');
    case BOLD(s):
      print('<strong>'+s+'</strong>');
   case UNORDSTART:
      print("<ul>");
    case UNORDEND:
      print("</ul>");
   case ORDSTART:
      print("<ol>");
    case ORDEND:
      print("</ol>");
    case LISTITEMSTART:
      print("<li>");
    case LISTITEMEND:
      print("</li>");
     case URL(u,d):
       var targetIndex = u.indexOf("#");
       if (targetIndex == -1)
         print('<a href="'+u+'">'+d+'</a>');
       else {
         var target = 'target="'+ u.substr(targetIndex+1)+'"';
         var url = u.substr(0,targetIndex);
         print('<a '+target+' href="'+url+'">'+d+'</a>');
       }
    }
  }
 
  static function tableRows(print,a:Array<String>,header=false) {
    var td = "td";
    if (header) {
      td = "th";
      print("<thead>") ;
    }
    else print("<tbody>");
    
    a.foreach(function(row) {
        print("<tr>");
        row.split("|").slice(0,-1).foreach(function(el) {
            print("<"+td+">"+el.htmlEscape()+"</"+td+">");
          });
        print("</tr>");
      });
    if (header) print("</thead>") else print("</tbody>");
  }

}