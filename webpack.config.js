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
    // preLoaders: [{
    //   test: /\.jsx?$/,
    //   loader: 'eslint-loader',
    //   exclude: /node_modules/,
    //   // include: path.resolve(__dirname, './src'),
    // }],
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
