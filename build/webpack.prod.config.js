const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config.js');
const cleanWebpackPlugin = require('clean-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = merge(webpackBaseConfig, {
    output: {
        path: resolve('../widget'),
        filename: '[name].js'
    },
    plugins: [
        new cleanWebpackPlugin(['widget/*'], {
            root: path.resolve(__dirname, '../')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
});
