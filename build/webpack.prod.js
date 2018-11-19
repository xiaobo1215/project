const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');


module.exports = merge(common, { // 将webpack.common.js合并到当前文件
    devtool: 'source-map',  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        // new CleanWebpackPlugin([ "../dist/"]),  // 所要清理的文件夹名称
        new CleanWebpackPlugin('dist', {
            root:path.join( __dirname, "../"),
            verbose: true,
            dry: false
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [{
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: '../'
                    }
                },'css-loader']
            },
            {
                test: /\.less$/,
                use: [ {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: '../'
                    } 
                },'css-loader','less-loader']
            }
        ]
    }
})