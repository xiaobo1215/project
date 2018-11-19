const path = require('path');
const util=require('./util.js')
const webpack = require('webpack');  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.conf')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry:util.getEntry(), 
    output: {
        path: path.join( __dirname, "../dist"), //打包后的文件存放的地方
        filename: "js/[name].js",//打包后输出文件的文件名
        publicPath:''
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module:{
        rules:[
            // {
            //     test: /\.css$/,
            //     use:[{
            //         loader: 'style-loader'
            //     },{
            //         loader: 'css-loader'
            //     },{
            //         loader: 'postcss-loader'
            //     }]
            // },
            // {
            //     test:/\.(scss|sass)$/,
            //     use:['style-loader', 'css-loader', 'sass-loader']
            // },
            // {
            //     test:/\.less$/,
            //     use:ExtractTextPlugin.extract({  // 这里我们需要调用分离插件内的extract方法
            //         fallback: 'style-loader',  // 相当于回滚，经postcss-loader和css-loader处理过的css最终再经过style-loader处理
            //         use: ['css-loader', 'postcss-loader','less-loader']
            //     })
            // },
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude: /node_modules/
            },
            {
               test:/\.vue$/,
               loader: 'vue-loader',
               options: {
                    hotReload: true // 关闭热重载
                }
            },
            {
                test: /\.(png|jpg|svg|gif)$/,  // 正则匹配图片格式名
                use: [
                    {
                        loader: 'url-loader',  // 使用url-loader
                        options:{
                            limit:1000,
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ].concat(util.HtmlWebpackPlugins_dev()),

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10    
                }
                // utils: { // 抽离自己写的公共代码，utils这个名字可以随意起 (css/js公用的都会单独抽离出来生成一个单独的文件)
                //    chunks: 'initial',
                //    name: 'utils',  // 任意命名
                //    minSize: 0    // 只要超出0字节就生成一个新包
                // }
            }
        }
    }
}