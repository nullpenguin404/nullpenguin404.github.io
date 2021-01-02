$(function() {
  var loc = location.pathname,
      dir = loc.substring(0, loc.lastIndexOf('/')) + '/';
  if (!dir.match(/introduction/)) {
    $("header").html(
      "\t\t<div class=\"h-content\">\n\t<div class=\"h-logo\">\n\t\t\t<a href=\"index.html\">nullpenguin404のお部屋</a>\n\t\t</div>\n\t\t<nav class=\"h-list\">\n\t\t\t<ul>\n\t\t\t\t<li><a href=\"https://www.youtube.com/channel/UCcgxWYd_S8WYJUgsBnPT_og/\" target=\"_blank\"><img src=\"images/youtube.png\" alt=\"\"></a></li>\n\t\t\t\t<li><a href=\"https://twitter.com/nullpenguin404\" target=\"_blank\"><img src=\"images/twitter.png\" alt=\"\"></a></li>\n\t\t\t\t<li><a href=\"https://discord.gg/hC4cyf6\" target=\"_blank\"><img src=\"images/discord.png\" alt=\"\"></a></li>\n\t\t\t</ul>\n\t\t</nav>\n\t</div>"
    );
  } else if (dir.match(/introduction/)) {
    $("header").html(
      "\t\t<div class=\"h-content\">\n\t<div class=\"h-logo\">\n\t\t\t<a href=\"../index.html\">nullpenguin404のお部屋</a>\n\t\t</div>\n\t\t<nav class=\"h-list\">\n\t\t\t<ul>\n\t\t\t\t<li><a href=\"https://www.youtube.com/channel/UCcgxWYd_S8WYJUgsBnPT_og/\" target=\"_blank\"><img src=\"../images/youtube.png\" alt=\"\"></a></li>\n\t\t\t\t<li><a href=\"https://twitter.com/nullpenguin404\" target=\"_blank\"><img src=\"../images/twitter.png\" alt=\"\"></a></li>\n\t\t\t\t<li><a href=\"https://discord.gg/hC4cyf6\" target=\"_blank\"><img src=\"../images/discord.png\" alt=\"\"></a></li>\n\t\t\t</ul>\n\t\t</nav>\n\t</div>"
    );
  }
})
