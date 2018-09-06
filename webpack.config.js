const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';
var env_status = isDevelopment ? 'development' : 'production';
console.log('This is a ' + env_status + ' build.');

 let baseConfig = {
  mode: 'production',
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

if (isDevelopment){
  baseConfig.mode = 'development';
  baseConfig.devServer = {
    // contentBase: path.resolve(__dirname, 'dist/'),
    // publicPath : '/dist/bundles'
  }
}
module.exports = baseConfig;