const commonConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const config = webpackMerge.merge(commonConfig, {
    mode: 'production',
    target: 'web',
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
});

module.exports = config;
