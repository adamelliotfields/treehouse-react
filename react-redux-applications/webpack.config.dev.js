const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'source', 'index.js'),
  output: {
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer()
              ]
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'source', 'ejs', 'index.ejs')
    })
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true
  }
};
