const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const url =
  process.env.NODE_ENV === "dev"
    ? `http://localhost:3000/todos`
    : "https://michelle-todo.herokuapp.com/todos";

module.exports = {
  name: "todo-setting",
  mode: "production",
  devtool: "source-map", //eval
  resolve: {
    extensions: [".js", ".jsx"]
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
      template: `./public/index.html`
    }),
    new webpack.DefinePlugin({
      URL: JSON.stringify(url)
    })
  ]
};
