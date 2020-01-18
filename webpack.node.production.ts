import * as webpack from 'webpack';
import commonConfig from './webpack.config';
import webpackMerge = require('webpack-merge');

const config: webpack.Configuration = webpackMerge(commonConfig, {
  devtool: 'source-map',
  mode: 'production',
  target: 'node',
});

export default config;
