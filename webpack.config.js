const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve('dist/'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        include: [path.resolve('src')],
      },
    ],
  },
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'node',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
    }),
  ],
};
