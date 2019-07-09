var path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: path.resolve(__dirname, './bricks.js'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react', '@emotion/babel-preset-css-prop']
        }
      }
    ]
  }
};