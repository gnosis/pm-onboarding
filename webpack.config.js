const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    modules: [
      'node_modules',
      'src'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "src/html/index.html"
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    })
  ]
};
