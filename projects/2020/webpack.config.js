const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
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
                loader: 'babel-loader',
                include: [path.resolve('src')],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
};

module.exports = config;
