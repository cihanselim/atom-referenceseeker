// const fs = require('fs');
// const path = require('path');
//
// document.addEventListener('DOMContentLoaded', function(event) {
//
//   //for getting CSS references list from MDN
//   var CSS_ref_links_MDN = {};
//   var ref = document.getElementsByClassName('index');
//   for (var j = 0; j < ref.length; j++){
//     var ref_keys = ref[j].getElementsByTagName('CODE');
//     var ref_values = ref[j].getElementsByTagName('A');
//     for (var i = 0; i < ref_keys.length; i++) {
//       key = ref_keys[i].lastChild.textContent;
//       value = ref_values[i].href;
//       CSS_ref_links_MDN[key] = value;
//     }
//   }
//   const filename =path.join(__dirname, "data", "css.txt")
//   //console.log(filename)
//   fs.writeFile(filename, JSON.stringify(CSS_ref_links_MDN),  function(err) {
//      if (err) {
//         return console.error(err);
//      }
//      else {
//        return console.log("Successfully written...")
//        fs.readFile(filename, function (err, data) {
//           if (err) {
//              return console.error(err);
//           }
//           console.log("Asynchronous read: " + data);
//        });
//      }  })
//   //console.log(CSS_ref_links_MDN);
//
//
//
//  // var request = new XMLHttpRequest();
//  // request.open("GET", "data/css.json", false);
//  // request.send(null)
//  // var my_JSON_object = JSON.parse(request.responseText);
//  // console.log(my_JSON_object);
//
//  var obj = JSON.parse(fs.readFileSync(__dirname + '/data/css.json', 'utf8'));
//  console.log(obj);
//
// /*
//   //for getting HTML references list from MDN
//   var HTML_element_ref_links_MDN = {};
//   var HTML_global_ref_links_MDN = {};
//   var H_ref = document.getElementsByTagName('OL');
//   var HTML_ref = H_ref[7];
//   var HTML_global_ref = H_ref[8];
//   var HTML_ref_values = HTML_ref.getElementsByTagName('A');
//   var HTML_global_ref_values = HTML_global_ref.getElementsByTagName('A');
//   for (var i = 0; i < HTML_ref_values.length; i++) {
//     key = HTML_ref_values[i].lastChild.textContent;
//     value = HTML_ref_values[i].href;
//     HTML_element_ref_links_MDN[key] = value;
//   }
//   for (var i = 0; i < HTML_global_ref_values.length; i++) {
//     key = HTML_global_ref_values[i].lastChild.textContent;
//     value = HTML_global_ref_values[i].href;
//     HTML_global_ref_links_MDN[key] = value;
//   }*/
//   /*const filename2 =path.join(__dirname, "data", "html_element.txt")
//   fs.writeFile(filename2, JSON.stringify(HTML_element_ref_links_MDN),  function(err) {
//      if (err) {
//         return console.error(err);
//      }
//      else {
//        return console.log("Successfully written...")
//        fs.readFile(filename2, function (err, data) {
//           if (err) {
//              return console.error(err);
//           }
//           console.log("Asynchronous read: " + data);
//        });
//      }  })
//
//      const filename3 =path.join(__dirname, "data", "html_global.txt")
//      fs.writeFile(filename3, JSON.stringify(HTML_global_ref_links_MDN),  function(err) {
//         if (err) {
//            return console.error(err);
//         }
//         else {
//           return console.log("Successfully written...")
//           fs.readFile(filename3, function (err, data) {
//              if (err) {
//                 return console.error(err);
//              }
//              console.log("Asynchronous read: " + data);
//           });
//         }  })*/
//
//   //console.log(HTML_element_ref_links_MDN);
//   //console.log(HTML_global_ref_links_MDN);
//
//   //for getting JS references list from MDN
//
//   /*var JS_ref_links_MDN = {};
//   var JS_ref = document.getElementsByTagName('LI');
//   for (var i = 0; i < JS_ref.length; i++){
//     var JS_ref_values = JS_ref[i].getElementsByTagName('A');
//     if(JS_ref_values[0]){
//       cntrl = JS_ref_values[0].href.split("/JavaScript/");
//       if (cntrl.length > 1){
//         scntrl = cntrl[1].split("/");
//         if ((scntrl[0] == "Reference") && (scntrl[1])){
//           key = JS_ref_values[0].lastChild.textContent;
//           value = JS_ref_values[0].href;
//           JS_ref_links_MDN[key] = value;
//         }
//       }
//     }
//   }
//   const filename4 =path.join(__dirname, "data", "JS.txt")
//   fs.writeFile(filename4, JSON.stringify(JS_ref_links_MDN),  function(err) {
//      if (err) {
//         return console.error(err);
//      }
//      else {
//        return console.log("Successfully written...")
//        fs.readFile(filename4, function (err, data) {
//           if (err) {
//              return console.error(err);
//           }
//           console.log("Asynchronous read: " + data);
//        });
//      }  })*/
//   //console.log(JS_ref_links_MDN);
//
// });
