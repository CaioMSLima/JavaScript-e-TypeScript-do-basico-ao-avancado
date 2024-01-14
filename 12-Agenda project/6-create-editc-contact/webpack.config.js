const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './frontend/main.js',
  output: {
    //__dirname name of diretory or folder
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      //not read this folder
      exclude: /node_modules/,
      //test what file you will read, this file turnd with .js
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader','css-loader']
    }]
  },
  ///devtoll map error
  devtool: 'source-map'
};
