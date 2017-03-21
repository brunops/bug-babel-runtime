'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    'index': path.resolve(__dirname,'./index.js')
  },

  output: {
    path: path.resolve(__dirname, '.build'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [ '.js' ]
  }
}
