$(function(){
  var loc = location.pathname,
      dir = loc.substring(0, loc.lastIndexOf('/')) + '/';
  if (!dir.match(/introduction/)) {
    $("footer.m-footer").html(
      "\t\t<div class= \"f-contents\">\t\t\t<div class=\"f-logo\">\n\t\t\t\t<a href=\"index\.html\">nullpenguin404のお部屋</a>\n\t\t\t</div>\n\t\t\t<div class=\"f-list-l\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>${f-list}</li>\n\t\t\t\t\t<li>${f-list}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\t<div class=\"f-list\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><img src=\"images/youtube\.png\" alt=\"\">youtube</li>\n\t\t\t\t\t\t<li><img src=\"images/twitter\.png\" alt=\"\">twitter</li>\n\t\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>"
    )
  } else if (dir.match(/introduction/)) {
    $("footer.m-footer").html(
      "\t\t<div class=\"f-contents\">\t\t\t<div class=\"f-logo\">\n\t\t\t\t<a href=\"../index\.html\">nullpenguin404のお部屋</a>\n\t\t\t</div>\n\t\t\t<div class=\"f-list-l\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>${f-list}</li>\n\t\t\t\t\t<li>${f-list}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\t<div class=\"f-list\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><img src=\"../images/youtube\.png\" alt=\"\">youtube</li>\n\t\t\t\t\t\t<li><img src=\"../images/twitter\.png\" alt=\"\">twitter</li>\n\t\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>"
    )
  }
});
