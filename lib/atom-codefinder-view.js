'use babel';

export default class AtomCodefinderView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('atom-codefinder');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The AtomCodefinder package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
    var webview = document.createElement('webview');
    webview.setAttribute("src", "https://developer.mozilla.org/tr/docs/Web/CSS/margin-left");
    webview.setAttribute("preload", "/home/chnselim/github/atom-codefinder/lib/preload.js");
    this.element.appendChild(webview);
    webview.addEventListener('dom-ready', () => {
        webview.openDevTools()
    })
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
