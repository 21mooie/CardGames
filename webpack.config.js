const path = require('path');

module.exports = {
  entry: './js/intro.js',
  output: {
    filename: 'intro_bundle.js',
    path: path.resolve(__dirname, 'dist/bundles/')
  }
};