import * as webpack from 'webpack';
import commonConfig from './webpack.config';
import webpackMerge = require('webpack-merge');

const config: webpack.Configuration = webpackMerge.merge(commonConfig, {
  mode: 'production',
  target: 'node',
  devtool: 'source-map',
});

export default config;
