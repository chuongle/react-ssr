const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/public',
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src/client'),
      },
    ],
  },
};
