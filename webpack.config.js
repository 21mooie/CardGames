const path = require('path');

module.exports = {
  entry: './js/intro.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/bundles/')
  }
};