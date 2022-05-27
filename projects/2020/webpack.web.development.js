const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config');

const config = webpackMerge.merge(commonConfig, {
    mode: 'development',
    target: 'web',
    devtool: 'eval-source-map',
    devServer: {
        port: 8888,
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
});

module.exports = config;
