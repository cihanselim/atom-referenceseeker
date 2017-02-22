'use babel';

import AtomCodefinderView from './atom-codefinder-view';
import { CompositeDisposable } from 'atom';
// import {View} from 'space-pen'
const fs = require('fs');
const path = require('path');



/*

module.exports =
class ResultsView extends ScrollView
  @content: ->
    @ol class: 'results-view list-tree focusable-panel has-collapsable-children', tabindex: -1
*/

export default {

  atomCodefinderView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomCodefinderView = new AtomCodefinderView(state.atomCodefinderViewState);

    this.modalPanel = atom.workspace.addTopPanel({
      item: this.atomCodefinderView.getElement(),
      visible: false
    });
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-codefinder:toggle': () => this.toggle()
    }));
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
