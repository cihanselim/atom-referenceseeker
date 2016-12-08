
document.addEventListener('DOMContentLoaded', function(event) {

  //for getting references list from MDN
  var ref_links_MDN = {};
  var ref = document.getElementsByClassName('index');
  for (var j = 0; j < ref.length; j++){
    var ref_keys = ref[j].getElementsByTagName('CODE');
    var ref_values = ref[j].getElementsByTagName('A');
    for (var i = 0; i < ref_keys.length; i++) {
      key = ref_keys[i].lastChild.textContent;
      value = ref_values[i].href;
      ref_links_MDN[key] = value;
    }
  }
  console.log(ref_links_MDN);
});
