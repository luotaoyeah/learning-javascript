import * as webpack from 'webpack';
import * as path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: webpack.Configuration = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
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
  plugins: [new CleanWebpackPlugin()],
};

export default config;
