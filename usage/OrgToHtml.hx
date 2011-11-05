
import cloudshift.Core;
using cloudshift.Mixin;

import cloudshift.orgmode.Org;

class OrgToHtml {

  public static function
  main() {
    //Org.next(html);
    var contents = new String(js.Node.fs.readFileSync(js.Node.process.argv[2]));
    Org.parse(contents,html);
  }

  
  public static function
  html(cons) {
    var print = js.Node.process.stdout.write;
    switch(cons) {
    case PARA:
      print("<p></p>");
    case H1(s):
      print("<h1>"+s+"</h1>");
    case H2(s):
      print("<h2>"+s+"</h2>");
    case H3(s):
      print("<h3>"+s+"</h3>");
    case TEXTSTART(s):
      print("<p>"+s);
    case TEXT(s):
      print(s);
    case TEXTEND(s):
      print(s+"</p>");
    case SRC(s):
      print("<pre>"+s.join("\n")+"</pre>");
    case TABLE(s):
      print("<pre>"+s.join("\n")+"</pre>");
    case UNDERLINE(s):
      print('<span style="text-decoration:underline">'+s+'</span>');
    case BOLD(s):
      print('<strong>'+s+'</strong>');
   case UNORD(s):
      print("<ul>");
      s.foreach(function(el) {
          print("<li>"+el+"</li>");
        });
      print("</ul>");
     
    case ORD(s):
      print("<ol>");
      s.foreach(function(el) {
          print("<li>"+el+"</li>");
        });
      print("</ol>");
    case URL(u,d):
      print('<a href="'+u+'">'+d+'</a>');
    }
  }
 


}