module.exports = {
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10    
                },
                utils: { // 抽离自己写的公共代码，utils这个名字可以随意起 (css/js公用的都会单独抽离出来生成一个单独的文件)
                   chunks: 'initial',
                   name: 'utils',  // 任意命名
                   minSize: 0    // 只要超出0字节就生成一个新包
                }
            }
        }
    },  
}
