const merge = require('webpack-merge');  // 引入webpack-merge功能模块
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const webpack = require('webpack');  
const { VueLoaderPlugin } = require('vue-loader')


module.exports = merge(common, {   // 将webpack.common.js合并到当前文件
    devServer: {
        contentBase: "./dist",   // 本地服务器所加载文件的目录
        port: "8088",  // 设置端口号为8088
        inline: true,  // 文件修改后实时刷新
        historyApiFallback: true, //不跳转
        hot: true     //热加载
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader','css-loader','less-loader']
            }
        ]
    }
})