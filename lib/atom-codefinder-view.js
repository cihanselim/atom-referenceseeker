'use babel';
const fs = require('fs');
const path = require('path');
//see also son satır gozukemmesı
export default class AtomCodefinderView {

  constructor(serializedState) {
    var isFirst = true;
    //creating main div
    this.element = document.createElement('div');
    this.element.classList.add('atom-codefinder');
    this.element.id = "divFirst";
    this.element.style.width = "50vh";
    var that = this.element;

    var contentBox = document.createElement('div');
    contentBox.classList.add('atom-codefinder');
    contentBox.id = "acf-content";

    //
    // this.element = document.createElement('div');
    // this.element.classList.add('atom-codefinder');
    // this.element.id = "divSecond";
    // this.element.style.width = "50vh";
    // var secondDiv = this.element;


    //defining a subject
    var myLabel = document.createElement('input');
    myLabel.value = "margin";
    myLabel.id = "mylabel";
    myLabel.setAttribute('type', 'text');
    myLabel.setAttribute("style", "height: 3vh; width: 20vh; align: center; margin: 10px; color:black;");
    myLabel.placeholder = "Type your subject...";
    this.element.appendChild(myLabel);

    //searching for it
    var myButton = document.createElement('button');
    myButton.innerText = "Search";
    myButton.setAttribute("style", "height: 3vh; width: 10vh; align: center; float:right; margin-top:10px;margin-right:20px; margin-bottom:10px; color: black;");
    this.element.appendChild(myButton);
    this.element.appendChild(contentBox)

    myButton.addEventListener('click', search);

    function search(){
      while (contentBox.firstChild) {
          contentBox.removeChild(contentBox.firstChild);
      }
      var search_key = myLabel.value;
      console.log(search_key);
      var for_webview = [];
      var css_urls = JSON.parse(fs.readFileSync('/home/chnselim/github/atom-codefinder/lib/data/MDN_CSS/urls.json', 'utf8'));
      var html_urls = JSON.parse(fs.readFileSync('/home/chnselim/github/atom-codefinder/lib/data/MDN_HTML/urls.json', 'utf8'));
      var js_urls = JSON.parse(fs.readFileSync('/home/chnselim/github/atom-codefinder/lib/data/MDN_JS/urls.json', 'utf8'));

      //console.log(css_urls);
      var url_list = [css_urls,html_urls,js_urls];
      for (var i=0; i < url_list.length; i++){
        var urls = url_list[i];
        Object.keys(urls).forEach(function(key){
          var suc_rate = Math.floor((key.length) / (search_key.length))
          if (key.includes(search_key) && (suc_rate <= 3)) { // && (suc_rate <= 3)
            //searching for it

            var myLink = document.createElement('div');
            myLink.innerText = key;
            myLink.id = "mylink";
            myLink.setAttribute("class", "mylink");
            myLink.setAttribute("data", urls[key]);
            // myLink.setAttribute("rel", "stylesheet");
            // myLink.setAttribute("type", "text/css");
            // myLink.setAttribute("href", "/home/chnselim/github/atom-codefinder/lib/css/panel.css");

            myLink.setAttribute("style", "display: block; border: solid; border-width: 0.5px;opacity: 0.6;background-color: white; font-size: 16px; height: 55px; width: 50vh; color: black; text-align: center;");
            contentBox.appendChild(myLink);

            //link click
            myLink.addEventListener('click', webView);

            function webView(){
              /* if(!isFirst){
                document.getElementById("divFirst").removeChild(document.getElementById("divFirst").lastChild);
              } */
              var buttons = document.getElementsByClassName("mylink");
              for (var i=0;i<buttons.length;i++){
                buttons[i].style.display = 'none';
              }
              var webviewWrapper = document.createElement('div');
              var webview = document.createElement('webview');
              var url = this.getAttribute("data");
              console.log(this);
              console.log(url);
              // webview.setAttribute("src", "https://developer.mozilla.org/tr/docs/Web/"+ myComboBox.value + "/" + myLabel.value);
              // webview.setAttribute("src", "https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Functions/get");
              webview.setAttribute("src", url);
              // console.log(webview);
              webview.setAttribute("preload", "/home/chnselim/github/atom-codefinder/lib/data/MDN_JS/preload.js");
              webview.setAttribute("style", "height: 100vh; width: 440px;");
              webviewWrapper.appendChild(webview);
              contentBox.appendChild(webviewWrapper);
              webview.addEventListener('dom-ready', () =>{
                // webview.openDevTools();
                isFirst = false;
              });
              // secondDiv.style.display = 'none';
            }

          }
        })
      }
    }

  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
