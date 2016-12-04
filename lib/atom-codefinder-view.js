'use babel';

export default class AtomCodefinderView {

  constructor(serializedState) {

    //creating main div
    this.element = document.createElement('div');
    this.element.classList.add('atom-codefinder');
    this.element.id = "divFirst";

    //selecting a language
    var myComboBox = document.createElement('select');
    myComboBox.setAttribute("style", "height: 30px; width: 150px; align: center; margin-top:10px; margin-bottom:10px;");
    this.element.appendChild(myComboBox);

    //defining a subject
    var myLabel = document.createElement('INPUT');
    myLabel.setAttribute("style", "height: 30px; width: 190px; align: center; margin-top:10px; margin-bottom:10px; margin-left: 10px; margin-right: 10px;");
    myLabel.placeholder = "Type your subject...";
    this.element.appendChild(myLabel);

    //searching for it
    var myButton = document.createElement('button');
    myButton.innerText = "SEARCH";
    myButton.setAttribute("style", "height: 30px; width: 80px; align: center; float:right; margin-top:10px; margin-bottom:10px; color: black;");
    this.element.appendChild(myButton);
    myButton.addEventListener('click', webView);

    function webView(){
      //web page
      var webview = document.createElement('webview');
      webview.setAttribute("src", "https://developer.mozilla.org/tr/docs/Web/CSS/margin-left");
      webview.setAttribute("preload", "/home/chnselim/github/atom-codefinder/lib/preload.js");
      webview.setAttribute("style", "height: 100vh; width: 450px;");
      document.getElementById("divFirst").appendChild(webview);
      
      //this.element.appendChild(webview);
      // webview.addEventListener('dom-ready', () => {
      //     webview.openDevTools()
      // });
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
