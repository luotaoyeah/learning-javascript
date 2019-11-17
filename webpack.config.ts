import * as webpack from 'webpack';
import * as path from 'path';
// eslint-disable-next-line
import HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('dist/'),
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json'],
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
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    port: 8888,
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
};

export default config;
