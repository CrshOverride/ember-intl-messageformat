/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

var packageName = 'ember-intl-messageformat';

module.exports = {
  name: 'intl-messageformat',

  included: function(app) {
    this._super.included.apply(this, arguments);
    this.app = app;
  },

  treeForAddon: function(tree) {
    var root = path.join(this.project.root, 'node_modules', 'ember-intl-messageformat');

    if (this.app && this.app.project.pkg.name === packageName) {
      root = path.join(this.project.root);
    }

    var trees = mergeTrees([this.treeGenerator(path.join(root, 'node_modules', 'intl-messageformat', 'src')), tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
};
