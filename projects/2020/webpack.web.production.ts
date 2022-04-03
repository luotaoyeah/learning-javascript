import * as webpack from 'webpack';
import commonConfig from './webpack.config';
import HtmlWebpackPlugin = require('html-webpack-plugin');
import webpackMerge = require('webpack-merge');

const config: webpack.Configuration = webpackMerge.merge(commonConfig, {
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
});

export default config;
