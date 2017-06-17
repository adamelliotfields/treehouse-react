const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './client/source/index.js'
  ],
  output: {
    filename: './js/bundle.js',
    path: path.join(__dirname, 'client', 'build')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  cssnano({
                    discardComments: {
                      removeAll: true
                    }
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'stage-3', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: './css/bundle.css'
    }),
    new CopyPlugin([
      { from: 'client/source/icons' }
    ])
  ]
};
