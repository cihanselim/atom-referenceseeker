'use babel';

import AtomCodefinderView from './atom-codefinder-view';
import { CompositeDisposable } from 'atom';
const fs = require('fs');
const path = require('path');

export default {

  atomCodefinderView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomCodefinderView = new AtomCodefinderView(state.atomCodefinderViewState);
    this.modalPanel = atom.workspace.addRightPanel({
      item: this.atomCodefinderView.getElement(),
      visible: false
    });
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-codefinder:toggle': () => this.toggle()
    }));
    // var css_urls = JSON.parse(fs.readFileSync('/home/chnselim/github/atom-codefinder/lib/data/MDN_CSS/urls.json', 'utf8'));
    // var html_urls = JSON.parse(fs.readFileSync('/home/chnselim/github/atom-codefinder/lib/data/MDN_HTML/urls.json', 'utf8'));
    // var js_urls = JSON.parse(fs.readFileSync('/home/chnselim/github/atom-codefinder/lib/data/MDN_JS/urls.json', 'utf8'));
    //  console.log(css_urls);
    //  console.log(html_urls);
    //  console.log(js_urls);
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomCodefinderView.destroy();
  },

  serialize() {
    return {
      atomCodefinderViewState: this.atomCodefinderView.serialize()
    };
  },

  toggle() {

    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()

    );
  }
};
