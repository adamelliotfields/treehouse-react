const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './source/jsx/index.jsx'
  ],
  output: {
    filename: './js/bundle.js',
    path: path.join(__dirname, 'build')
  },
  devtool: 'source-map',
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
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-3']
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
    new CopyWebpackPlugin([
      { from: 'source/index.html', to: './index.html' },
      { from: 'source/favicon.ico', to: './favicon.ico' },
      { from: 'source/apple-touch-icon.png', to: './apple-touch-icon.png' }
    ])
  ]
};
