
document.addEventListener('DOMContentLoaded', function(event) {

  var deleted_list = ['main-header', 'wiki-right', 'quick-links', 'Values',
                      'Formal_syntax', 'Specifications', 'Browser_Compatibility',
                      'main-footer','Browser_compatibility', 'doc-pending-fallback',
                       'See_also'];
  for (var del_item_id in deleted_list) {
    if (document.getElementById(deleted_list[del_item_id])){
      document.getElementById(deleted_list[del_item_id]).style.display = 'none';
    }
  }

  var dl_links = document.getElementsByTagName('DL');
  for (var i = 0; i < dl_links.length; i++) {
    dl_links[i].style.display = 'none';
  }

  var ul = document.getElementsByTagName('UL');
  for (var i = 0; i < ul.length; i++) {
    ul[i].style.display = 'none';
  }

  var classes2delete = ['newsletter-box', 'wiki-block contributors', 'htab',
                        'standard-table', 'syntaxbox', 'syntaxbox-help icon-only',
                        'article-meta'];
  for (var i = 0; i < classes2delete.length; i++) {
    var classes = document.getElementsByClassName(classes2delete[i]);
    for (var j = 0; j < classes.length; j++) {
      classes[j].style.display = 'none';
    }
  }

  var hrefs = document.getElementsByTagName('A');
  for (var i = 0; i < hrefs.length; i++) {
    hrefs[i].href = '#';
  }

});
