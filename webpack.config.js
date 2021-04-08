const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
    }),
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
};
