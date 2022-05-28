const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    static: './dist',
    open: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page'
    }),
  ],

  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ]
  },

  // when there are multiple entry points on a single HTML page
  optimization: {
    runtimeChunk: 'single',
  },

  mode: process.env.NODE_ENV === "production" ? "production" : "development" 
};