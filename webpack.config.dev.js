const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  name: "todo-setting",
  mode: "development",
  devtool: "source-map", //eval
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  entry: "./src/index",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: "false"
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // template의 html에 output에서 만들어진 bundle.js를 적용하여 html 파일 생성
      template: `./public/index.html`
    }),
    new webpack.DefinePlugin({
      URL: JSON.stringify(`http://localhost:3000/todos`)
    })
  ]
};
