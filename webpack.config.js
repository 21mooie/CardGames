const path = require('path');

module.exports = {
  entry: './js/prepareGame.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};