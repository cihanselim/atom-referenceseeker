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
    //this.element.style.width = "50vh";
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
    inputBox.value = "bor";
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
      var cssUrl = JSON.parse(fs.readFileSync(__dirname + '/data/MDN_CSS/result-css.json', 'utf8'));
      var htmlUrl = JSON.parse(fs.readFileSync(__dirname + '/data/MDN_HTML/result-html.json', 'utf8'));
      var jsUrl = JSON.parse(fs.readFileSync(__dirname + '/data/MDN_JS/result-js.json', 'utf8'));
      var pythonUrl = JSON.parse(fs.readFileSync(__dirname + '/data/DOCSPYTHON_PYTHON2/pythonDoc.json', 'utf8'));
      var urlList = [pythonUrl,cssUrl,htmlUrl,jsUrl];

      //now static 1 icon,it will change when the other icons are added to JSONs
      var icon = __dirname + '/css/mdn.png';

      for (var i=0; i < urlList.length; i++){
        var urls = urlList[i];

        for (var j=0; j < urls.data.length; j++){
          var successRate = Math.floor((urls.data[j].name.length) / (searchKey.length))
          if (urls.data[j].name.includes(searchKey) && (successRate <= 3)) { //&& (successRate <= 3)
            var hyperLink = document.createElement('div');
            //console.log(urls.data[j].name)
            hyperLink.innerHTML = urls.data[j].name + '<BR>' + "info";//+'<img id="icon" src='+icon+'>'
            hyperLink.id = "hyperlink";
            hyperLink.setAttribute("class", "hyperlink");
            hyperLink.setAttribute("data", urls.data[j].url);
            contentBox.appendChild(hyperLink);
            //clicking hyperlink
            hyperLink.addEventListener('click', newTab);

            function newTab(){
              atom.workspace.open("Search: " + urls.firstName,
              {
                split: 'right',
                activateItem:false
              });

              var itemClass = document.getElementsByClassName("item-views");
              var webviewWrapper = document.createElement('div');
              var webview = document.createElement('webview');
              var url = this.getAttribute("data");
              webview.id = "webview";
              webview.setAttribute("src", url);
              //preload düzelt
              webview.setAttribute("preload", __dirname + "/data/MDN_JS/preload.js");
              webviewWrapper.appendChild(webview);
              itemClass[itemClass.length-1].appendChild(webviewWrapper);
              webview.addEventListener('dom-ready', () =>{// webview.openDevTools();
                isFirst = false;
              });
            }
          }
        }
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
