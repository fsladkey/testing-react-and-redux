var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    path.resolve(__dirname, 'src', 'entry.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
        JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devtool: 'source-map',
};
