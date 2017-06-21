const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ExtractText = require('extract-text-webpack-plugin');
const HTML = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, 'source', 'index.js')
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.join(__dirname, 'build')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css?$/,
        loader: ExtractText.extract({
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
                plugins: [
                  autoprefixer(),
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
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    }),
    new ExtractText({
      filename: '/css/bundle.[chunkhash].css'
    }),
    new HTML({
      template: path.join(__dirname, 'source', 'ejs', 'index.ejs'),
      filename: 'index.html',
      hash: true
    })
  ]
};
