const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    // ],
    devServer: {
        contentBase:  "./dist",
        host: '0.0.0.0',
        port: 9000,
        historyApiFallback: true,
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
        }
    },
});