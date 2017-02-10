const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const buildPath = path.join(__dirname, 'dist/');

const commonConfig = {
    entry: {
        'bay-components': './src/index',
        'bay-components.min': './src/index',
    },
    output: {
        path: buildPath,
        filename: '[name].js',
        library: 'bayComponents',
        libraryTarget: 'var',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel'],
        }],
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false,
            },
        }),
    ],
};

module.exports = commonConfig;
