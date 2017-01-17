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
    this.element.id = "mainDiv";
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
    var inputBox = document.createElement('input');
    inputBox.value = "margin";
    inputBox.id = "inputBox";
    inputBox.setAttribute('type', 'text');
    inputBox.setAttribute("style", "height: 3vh; width: 20vh; align: center; margin: 10px; color:black;");
    inputBox.placeholder = "Type your subject...";
    this.element.appendChild(inputBox);

    //searching for it
    var searchButton = document.createElement('button');
    searchButton.innerText = "Search";
    searchButton.setAttribute("style", "height: 3vh; width: 10vh; align: center; float:right; margin-top:10px;margin-right:20px; margin-bottom:10px; color: black;");
    this.element.appendChild(searchButton);
    this.element.appendChild(contentBox)

    searchButton.addEventListener('click', search);

    function search(){
      while (contentBox.firstChild) {
          contentBox.removeChild(contentBox.firstChild);
      }
      var searchKey = inputBox.value;
      console.log(searchKey);
      var for_webview = [];
      var cssUrl = JSON.parse(fs.readFileSync('/home/chnselim/github/atom-codefinder/lib/data/MDN_CSS/urls.json', 'utf8'));
      var htmlUrl = JSON.parse(fs.readFileSync('/home/chnselim/github/atom-codefinder/lib/data/MDN_HTML/urls.json', 'utf8'));
      var jsUrl = JSON.parse(fs.readFileSync('/home/chnselim/github/atom-codefinder/lib/data/MDN_JS/urls.json', 'utf8'));

      //console.log(cssUrl);
      var urlList = [cssUrl,htmlUrl,jsUrl];
      for (var i=0; i < urlList.length; i++){
        var urls = urlList[i];
        Object.keys(urls).forEach(function(key){
          var successRate = Math.floor((key.length) / (searchKey.length))
          if (key.includes(searchKey) && (successRate <= 3)) { // && (successRate <= 3)
            //searching for it

            var hyperLink = document.createElement('div');
            hyperLink.innerText = key;
            hyperLink.id = "hyperLink";
            hyperLink.setAttribute("class", "hyperLink");
            hyperLink.setAttribute("data", urls[key]);
            // hyperLink.setAttribute("rel", "stylesheet");
            // hyperLink.setAttribute("type", "text/css");
            // hyperLink.setAttribute("href", "/home/chnselim/github/atom-codefinder/lib/css/panel.css");

            hyperLink.setAttribute("style", "display: block; border: solid; border-width: 0.5px;opacity: 0.6;background-color: white; font-size: 16px; height: 55px; width: 50vh; color: black; text-align: center;");
            contentBox.appendChild(hyperLink);

            //link click
            hyperLink.addEventListener('click', webView);

            function webView(){
              /* if(!isFirst){
                document.getElementById("mainDiv").removeChild(document.getElementById("mainDiv").lastChild);
              } */
              var buttons = document.getElementsByClassName("hyperLink");
              for (var i=0;i<buttons.length;i++){
                buttons[i].style.display = 'none';
              }
              var webviewWrapper = document.createElement('div');
              var webview = document.createElement('webview');
              var url = this.getAttribute("data");
              console.log(this);
              console.log(url);
              // webview.setAttribute("src", "https://developer.mozilla.org/tr/docs/Web/"+ myComboBox.value + "/" + inputBox.value);
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
