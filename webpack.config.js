const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

const isProduction = process.env.NODE_ENV == 'production'
const htmlBase = isProduction ? '/pm-onboarding/' : '/'

if (isProduction) {
  console.log("Running in production environment")
}

module.exports = {
  devtool: "eval-source-map",
  output: {
    path: __dirname + '/docs' // github pages for now
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
    new HtmlWebPackPlugin({
      template: "src/html/index.html",
      base: htmlBase
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      BASE_URL: htmlBase
    })
  ]
};
