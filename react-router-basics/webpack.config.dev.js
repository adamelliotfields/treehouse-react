const webpack = require('webpack');

module.exports = {
  entry: [
    './source/index.js'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/js/'
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
            loader: 'css-loader'
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
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    contentBase: ['source/public']
  }
};
