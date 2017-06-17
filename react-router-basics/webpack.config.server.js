const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './server/source/index.js'
  ],
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'server', 'build')
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
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
      comments: false
    }),
    new CopyWebpackPlugin([
      { from: 'server/source/views', to: './views' }
    ])
  ]
};
