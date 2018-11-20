
const glob = require("glob");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pageBase = path.resolve(__dirname, '../src/pages')


var entry = {};
//读取src目录所有page入口
exports.getEntrys=function(){
    var reg=/(?=(\w+\.js))/
    glob.sync('./src/page/**/index.js').forEach(function (name) {
        let na=path.dirname(name).split('/').pop()
        entry[na]=path.resolve('./', name)
    });
    console.log(entry,'-------------entry----------------')
    return entry
}

function HtmlList (fn) {
    var urls = [];
    let entryHtml = glob.sync('./src/page/**/index.html')
    entryHtml.forEach((filePath) => {
        let name = path.dirname(filePath).split('/').pop()
        urls.push({name: name, file: filePath, dist: name+'.html'})
    })
    urls.forEach(fn);
}

exports.htmlPlugin = function () {
    var pList=[]
    HtmlList(function (n) {
        var str=''
        pList.push(new HtmlWebpackPlugin({
          filename: str+n.dist,
          template: n.file,
          chunks: ['vendor', n.name,'util'],
          inject: true
        }))
    });
    console.log(pList)
    return pList;
}