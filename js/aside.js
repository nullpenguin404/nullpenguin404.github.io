$(function(){
  var loc = location.pathname,
      dir = loc.substring(0, loc.lastIndexOf('/')) + '/';
  if (!dir.match(/introduction/)) {
    $("aside").html(
      "<div class=\"sb-title\">\n\t\t\t<a href=\"introduction/introduction_index.html\">動画シリーズ</a>\n\t\t</div>\n\t\t<ul>\n\t\t\t<li><a href=\"introduction/カテゴリにつきmod一つ縛りで難関modに挑む.html\">カテゴリにつきmod一つ縛りで難関modに挑む(仮)</a></li>\n\t\t</ul>\n\t\t<div class=\"sb-title\">\n\t\t\tリンク集\n\t\t</div>\n\t\t<ul>\n\t\t\t<li><a href=\"remember.html\">覚書</a></li>\n\t\t\t<li><a href=\"contact.html\">ご意見ご感想</a></li>\n\t\t</ul>"
    )
  } else if (dir.match(/introduction/)) {
    $("aside").html(
      "<div class=\"sb-title\">\n\t\t\t<a href=\"introduction_index.html\">動画シリーズ</a>\n\t\t</div>\n\t\t<ul>\n\t\t\t<li><a href=\"カテゴリにつきmod一つ縛りで難関modに挑む.html\">カテゴリにつきmod一つ縛りで難関modに挑む(仮)</a></li>\n\t\t</ul>\n\t\t<div class=\"sb-title\">\n\t\t\tリンク集\n\t\t</div>\n\t\t<ul>\n\t\t\t<li><a href=\"../remember.html\">覚書</a></li>\n\t\t\t<li><a href=\"../contact.html\">ご意見ご感想</a></li>\n\t\t</ul>"
    )
  }
});
