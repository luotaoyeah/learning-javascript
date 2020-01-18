import * as webpack from 'webpack';
import commonConfig from './webpack.config';
import HtmlWebpackPlugin = require('html-webpack-plugin');
import webpackMerge = require('webpack-merge');

const config: webpack.Configuration = webpackMerge(commonConfig, {
  devtool: 'source-map',
  mode: 'production',
  target: 'web',
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
});

export default config;
