const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    output: { // 注： 热替换影响了chunkhash的使用，
        filename:  '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'), // __dirname 被执行js文件的绝对路径
        chunkFilename: '[name].[hash].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        port: 9000,
        historyApiFallback: {
            index: '/index.html'
        },
        proxy: {
            "/api": {
                pathRewrite: {
                    '/api': ''
                },
                target: 'http://localhost:9000',
                changeOrigin: true,
                router() {
                    return 'http://localhost:9004';
                }
            }
        },
        hot: true
    },
});