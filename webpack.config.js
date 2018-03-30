const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "index.js"
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [resolve("src")],
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src")]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 7
      }
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true
    })
  ]
};
