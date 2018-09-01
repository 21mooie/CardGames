const path = require('path');

module.exports = {
  entry: {
    intro: './js/intro.js',
    blackjack:'./js/blackjack.js'
    // prepareGameTest: './test/index/prepareGame.test.js',
    // introTest: './test/index/intro.test.js',
    // blackjackTest: './test/blackjack/blackjack.test.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/bundles/')
  }
};