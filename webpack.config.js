const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';
var env_status = isDevelopment ? 'development' : 'production';
console.log('This is a ' + env_status + ' build.');

 let baseConfig = {
  mode: 'production',
  entry: {
    intro: './js/intro.js',
    blackjack:'./js/blackjack.js',
    prepareGameTest: './test/index/prepareGame.test.js',
    introTest: './test/index/intro.test.js',
    blackjackTest: './test/blackjack/blackjack.test.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/bundles/')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: {
              loader: 'babel-loader'
            }
            
        }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

if (isDevelopment){
  baseConfig.mode = 'development';
  baseConfig.devServer = {
    // contentBase: [path.join(__dirname, 'dist'),path.join(__dirname,'css'),path.join(__dirname,'node_modules')]
    // publicPath : '/dist/bundles'
  }
}
module.exports = baseConfig;