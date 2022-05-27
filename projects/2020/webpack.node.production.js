const commonConfig = require('./webpack.config');
const webpackMerge = require('webpack-merge');

const config = webpackMerge.merge(commonConfig, {
    mode: 'production',
    target: 'node',
    devtool: 'source-map',
});

module.exports = config;
