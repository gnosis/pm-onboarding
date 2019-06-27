const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
  devtool: "eval-source-map",
  output: {
    path: __dirname + '/dist'
  },
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
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: [
            "css-loader", // translates CSS into CommonJS
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
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
