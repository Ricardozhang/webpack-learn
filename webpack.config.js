const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // __dirname 被执行js文件的绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']  // loader的执行顺序是从右往左，最终会将css注入到 html的head中
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']  // loader的执行顺序是从右往左，最终会将css注入到 html的head中
        }]
    }
};