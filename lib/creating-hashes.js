
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

  //for getting HTML references list from MDN
  var HTML_element_ref_links_MDN = {};
  var HTML_global_ref_links_MDN = {};
  var H_ref = document.getElementsByTagName('OL');
  var HTML_ref = H_ref[7];
  var HTML_global_ref = H_ref[8];
  var HTML_ref_values = HTML_ref.getElementsByTagName('A');
  var HTML_global_ref_values = HTML_global_ref.getElementsByTagName('A');
  for (var i = 0; i < HTML_ref_values.length; i++) {
    key = HTML_ref_values[i].lastChild.textContent;
    value = HTML_ref_values[i].href;
    HTML_element_ref_links_MDN[key] = value;
  }
  for (var i = 0; i < HTML_global_ref_values.length; i++) {
    key = HTML_global_ref_values[i].lastChild.textContent;
    value = HTML_global_ref_values[i].href;
    HTML_global_ref_links_MDN[key] = value;
  }
  console.log(HTML_element_ref_links_MDN);
  console.log(HTML_global_ref_links_MDN);

});
