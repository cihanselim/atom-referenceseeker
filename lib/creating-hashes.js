
document.addEventListener('DOMContentLoaded', function(event) {

  //for getting CSS references list from MDN
  var CSS_ref_links_MDN = {};
  var ref = document.getElementsByClassName('index');
  for (var j = 0; j < ref.length; j++){
    var ref_keys = ref[j].getElementsByTagName('CODE');
    var ref_values = ref[j].getElementsByTagName('A');
    for (var i = 0; i < ref_keys.length; i++) {
      key = ref_keys[i].lastChild.textContent;
      value = ref_values[i].href;
      CSS_ref_links_MDN[key] = value;
    }
  }
  console.log(CSS_ref_links_MDN);

  var HTML_ref_links_MDN = {};
  var HTML_ref = document.getElementsByClassName('standard-table');
  for (var j = 0; j < HTML_ref.length; j++){
    var HTML_ref_keys = HTML_ref[j].getElementsByTagName('CODE');
    var HTML_ref_values = HTML_ref[j].getElementsByTagName('A');
    for (var i = 0; i < HTML_ref_keys.length; i++) {
      if(HTML_ref_values[i] != null){
        key = HTML_ref_keys[i].lastChild.textContent;
        value = HTML_ref_values[i].href;
        HTML_ref_links_MDN[key] = value;
      }
    }
  }
  console.log(HTML_ref_links_MDN);

/*  //for getting HTML Element references list from MDN
  var HTML_Elements_ref_links_MDN = {};
  var HTML_ref = document.getElementById('wikiArticle');
  console.log(HTML_ref);
  for (var i = 0; i < HTML_ref.length; i++){
    var HTML_ref_keys = HTML_ref[i].getElementsByTagName('CODE');
    var HTML_ref_values = HTML_ref[i].getElementsByTagName('A');
    for (var j = 0; j < HTML_ref_keys.length; j++) {
      key = HTML_ref_keys[j].lastChild.textContent;
      console.log(HTML_ref_values);
      if(HTML_ref_values){
        value = HTML_ref_values[j].href;
        HTML_Elements_ref_links_MDN[key] = value;
      }
    }
  }
  console.log(HTML_Elements_ref_links_MDN);
  */
});
