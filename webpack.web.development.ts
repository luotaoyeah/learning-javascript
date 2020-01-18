import * as webpack from 'webpack';
import commonConfig from './webpack.config';
import HtmlWebpackPlugin = require('html-webpack-plugin');
import webpackMerge = require('webpack-merge');

const config: webpack.Configuration = webpackMerge(commonConfig, {
  devtool: 'eval-source-map',
  target: 'web',
  mode: 'development',
  devServer: {
    port: 8888,
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
});

export default config;
