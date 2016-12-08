'use babel';

export default class AtomCodefinderView {

  constructor(serializedState) {
    var isFirst = true;
    //creating main div
    this.element = document.createElement('div');
    this.element.classList.add('atom-codefinder');
    this.element.id = "divFirst";

    //for getting references list from MDN
    var div2 = document.createElement('div');
    div2.id = "divSecond";
    //div2.setAttribute("style", "display: none")
    this.element.appendChild(div2);

    //selecting a language
    var arr = ["CSS","JAVASCRIPT","HTML"];
    var myComboBox = document.createElement('select');
    for (var i = 0; i < arr.length; i++) {
      var option = document.createElement("option");
      option.value = arr[i];
      option.text = arr[i];
      myComboBox.appendChild(option);
    }
    myComboBox.setAttribute("style", "height: 30px; width: 150px; align: center; margin-top:10px; margin-bottom:10px; color: black;");
    this.element.appendChild(myComboBox);

    //defining a subject
    var myLabel = document.createElement('input');
    myLabel.setAttribute('type', 'text');
    myLabel.setAttribute("style", "height: 30px; width: 190px; align: center; margin: 10px; color:black;");
    myLabel.placeholder = "Type your subject...";
    this.element.appendChild(myLabel);

    //searching for it
    var myButton = document.createElement('button');
    myButton.innerText = "Search";
    myButton.setAttribute("style", "height: 30px; width: 80px; align: center; float:right; margin-top:10px; margin-bottom:10px; color: black;");
    this.element.appendChild(myButton);
    //myButton.onclick = webView;
    myButton.addEventListener('click', webView);
    function webView(){
      if(!isFirst){
        document.getElementById("divFirst").removeChild(document.getElementById("divFirst").lastChild);
      }
      var webview = document.createElement('webview');
      webview.setAttribute("src", "https://developer.mozilla.org/tr/docs/Web/"+ myComboBox.value + "/" + myLabel.value);
      console.log(webview);
      webview.setAttribute("preload", "/home/mkocaker/github/atom-codefinder/lib/preload.js");
      webview.setAttribute("style", "height: 100vh; width: 440px;");
      document.getElementById("divFirst").appendChild(webview);
      webview.addEventListener('dom-ready', () =>{
        webview.openDevTools();
        isFirst = false;
      });
      getHashes();
    }

    //for getting references list from MDN
    function getHashes(){
      var webview2 = document.createElement('webview');
      webview2.setAttribute("src", "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference");
      webview2.setAttribute("preload", "/home/mkocaker/github/atom-codefinder/lib/creating-hashes.js");
      document.getElementById("divSecond").appendChild(webview2);
      webview2.addEventListener('dom-ready', () =>{
        webview2.openDevTools();
      });

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
