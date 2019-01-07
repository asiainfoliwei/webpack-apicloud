const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config.js');
const { port } = require('./config');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = merge(webpackBaseConfig, {
    output: {
        path: resolve('../widget'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ],
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [{ from: /.*/, to: path.posix.join('/', 'index.html') }]
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true, // gzip 压缩
        host: '0.0.0.0', // 主机
        port, // 端口号
        open: false, // 是否打开服务器页面
        overlay: true,
        publicPath: '/',
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: false
        }
    }
});
