const path = require('path');
const webpack = require("webpack")

module.exports = {
  devtool:  false ,
  mode:"development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
//   Plugin:[ new webpack.HotModuleReplacementPlugin()]
};