const path = require('path');

module.exports = {
  entry: [
    './client'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, './public')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
