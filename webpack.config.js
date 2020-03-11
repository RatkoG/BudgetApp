const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractPlugin = new ExtractTextPlugin({
//   filename: 'main.css'
// });
module.exports = {
  entry: ['babel-polyfill', './src/js/app.js'],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './docs'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
};
