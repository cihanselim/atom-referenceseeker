'use babel';

export default class AtomCodefinderView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('atom-codefinder');

    var buttonGO = document.createElement('button');
    buttonGO.setAttribute("style", "height: 30px; width: 80px; padding-bottom: 20px;");
    this.element.appendChild(buttonGO);

    var comboBox = document.createElement('select');
    this.element.appendChild(comboBox);
    comboBox.setAttribute("style", "height: 30px; width: 80px; padding-bottom: 20px;");

    var webview = document.createElement('webview');
    webview.setAttribute("src", "https://developer.mozilla.org/tr/docs/Web/CSS/margin-left");
    webview.setAttribute("preload", "/home/chnselim/github/atom-codefinder/lib/preload.js");
    webview.setAttribute("style", "height: 100vh; width: 450px;");
    this.element.appendChild(webview);
    // webview.addEventListener('dom-ready', () => {
    //     webview.openDevTools()
    // });
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
