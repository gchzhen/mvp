const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, /* /\.(js|jsx)$/ -  if you have js files as well */
        exclude: /(node_modules|bower_components)/,
        // according to docs, they suggest to choose INCLUDE over EXCLUDE
        // include: path.join(__dirname, './client'),
        use: {
          loader: 'babel-loader', /* This package allows transpiling JavaScript files using Babel and webpack. */
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      }
    ],
  },
  devtool: "eval-source-map"
};
