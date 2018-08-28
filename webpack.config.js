const path = require('path');

module.exports = {
  entry: {
    intro: './js/intro.js',
    blackjack:'./js/blackjack.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/bundles/')
  }
};