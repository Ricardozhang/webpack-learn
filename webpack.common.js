const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry: {
        index: './src/index',
        // vendor: ['lodash']
    },
    output: { // 注： 热替换影响了chunkhash的使用，
        filename:  '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'), // __dirname 被执行js文件的绝对路径
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [ // plugins的执行顺序是从上往下
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            favicon: 'favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks:{
            cacheGroups: { // 提取公共部分打包
                common:{
                    chunks: 'initial',
                    name:'common', // 打包后的文件名
                    minSize: 0,
                    minChunks: 2 // 重复2次才能打包到此模块
                },
                vendor: {
                    priority: 1, // 优先级配置，优先匹配优先级更高的规则，不设置的规则优先级默认为0
                    test: /node_modules/, // 匹配对应文件
                    chunks: 'initial',
                    name:'vendor',
                    minSize: 0,
                    minChunks: 1
                }
            }
        },
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            "@layouts": path.resolve("src/layouts"),
            "@components": path.resolve("src/components"),
            "@pages": path.resolve("src/pages")
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] // loader的执行顺序是从右往左，最终会将css注入到 html的head中
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'] // loader的执行顺序是从右往左，最终会将css注入到 html的head中
        }, {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: ['file-loader'] // 未压缩图片
        }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
};