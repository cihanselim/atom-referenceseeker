'use babel';
const fs = require('fs');
const path = require('path');
//not : son search result biraz aşağıda kalıyor
export default class AtomCodefinderView {

  constructor(serializedState) {
    var isFirst = true;
    //creating main div
    this.element = document.createElement('div');
    this.element.classList.add('atom-codefinder');
    this.element.id = "mainDiv";
    this.element.style.width = "50vh";
    var that = this.element;

    //Head and Link to get CSS
    var head = document.createElement("HEAD");
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", __dirname + "/css/panel.css");
    head.appendChild(link);
    that.appendChild(head);
    
    var contentBox = document.createElement('div');
    contentBox.classList.add('atom-codefinder');
    contentBox.id = "acf-content";

    //defining a subject
    var inputBox = document.createElement('input');
    inputBox.value = "border";
    inputBox.id = "inputBox";
    inputBox.setAttribute('type', 'text');
    inputBox.placeholder = "Type your subject...";
    //'backspace' and 'delete' deletes all, enter searches
    inputBox.onkeydown = function() {
    var key = event.keyCode || event.charCode;
    if( key == 8 || key == 46 ){inputBox.value = "";}
    if( key == 13){search();}
    };

    that.appendChild(inputBox);

    //searching for it
    var searchButton = document.createElement('button');
    searchButton.innerText = "Search";
    searchButton.id = "searchButton";
    that.appendChild(searchButton);
    that.appendChild(contentBox);

    searchButton.addEventListener('click', search);
    function search(){

      while (contentBox.firstChild) {
          contentBox.removeChild(contentBox.firstChild);
      }

      var searchKey = inputBox.value;
      var cssUrl = JSON.parse(fs.readFileSync(__dirname + '/data/MDN_CSS/urls.json', 'utf8'));
      var htmlUrl = JSON.parse(fs.readFileSync(__dirname + '/data/MDN_HTML/urls.json', 'utf8'));
      var jsUrl = JSON.parse(fs.readFileSync(__dirname + '/data/MDN_JS/urls.json', 'utf8'));
      var urlList = [cssUrl,htmlUrl,jsUrl];

      //now static 1 icon,it will change when the other icons are added to JSONs
      var icon = __dirname + '/css/mdn.png';

      for (var i=0; i < urlList.length; i++){
        var urls = urlList[i];
        Object.keys(urls).forEach(function(key){
          var successRate = Math.floor((key.length) / (searchKey.length))
          if (key.includes(searchKey) && (successRate <= 3)) {

            var hyperLink = document.createElement('div');
            hyperLink.innerHTML = key + '<BR>' +'<img id="icon" src='+icon+'>';
            hyperLink.id = "hyperlink";
            hyperLink.setAttribute("class", "hyperlink");
            hyperLink.setAttribute("data", urls[key]);

            contentBox.appendChild(hyperLink);

            //clicking hyperlink
            hyperLink.addEventListener('click', webView);
            function webView(){
              /* if(!isFirst){
                document.getElementById("mainDiv").removeChild(document.getElementById("mainDiv").lastChild);
              } */
              var buttons = document.getElementsByClassName("hyperlink");
              for (var i=0;i<buttons.length;i++){
                buttons[i].style.display = 'none';
              }
              var webviewWrapper = document.createElement('div');
              var webview = document.createElement('webview');
              var url = this.getAttribute("data");
              // webview.setAttribute("src", "https://developer.mozilla.org/tr/docs/Web/"+ myComboBox.value + "/" + inputBox.value);
              // webview.setAttribute("src", "https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Functions/get");
              webview.id = "webview";
              webview.setAttribute("src", url);
              webview.setAttribute("preload", __dirname + "/data/MDN_JS/preload.js");
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
