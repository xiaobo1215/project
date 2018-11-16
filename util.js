
const glob = require("glob");
const path = require('path');
var entry = {};
//读取src目录所有page入口
exports.getEntry=function(){
    var reg=/(?=(\w+\.js))/
    glob.sync('./src/page/**/*.js')
        .forEach(function (name) {
            if(reg.test(name)){
            var l=RegExp.$1.length
            var na=RegExp.$1.substr(0,l-3)
            }
            entry[na]=path.join(__dirname, name)
    });
    return entry
}

function getHtmlList (index, arr, fn) {
    var urls = arr || [];
    let entryHtml = glob.sync('./src/page/**/*.html')
    entryHtml.forEach((filePath) => {
        console.log(filePath,'--')
        let name = path.dirname(filePath).split('/').pop()
        console.log({name: name, file: filePath, dist: filePath.split('/').pop()})
        //console.log(chalk.green('  将pages/'+name+'/index.html  生成到    dist/' + name + '.html'))
        // urls.push({name: name, file: filePath, dist: filePath.split('/').pop()+'.html'})

    })
   urls.forEach(fn);
}
getHtmlList()