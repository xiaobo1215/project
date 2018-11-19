# webpack多页面开发

# Vue + VueRouter + webpack 

## 安装
npm install ...

## 本地开发和调试
npm run dev //启动本地服务器

## 发布
npm run build

## 技术选型

- 框架 - Vue+VueRouter
- 模块化 - webpack,CommonJS规范,es6Module
- 构建工具 - webpack

## 目录结构

```
├── README.md                   //项目说明文档 
├── node_modules                //乱七八糟的各种依赖包
├── dist                        //打包后的文件
├── package.json                //node依赖配置文件
├── src                         //源码目录
    ├── page                    //HTML页面入口
        |── index               index.html 页面
            |──index.js         js入口文件
            |──style            样式文件
            |──tpl              模板文件
            |──component        组建文件
        |── page1               page1.html 页面
        |── page1               page2.html 页面
        |....                   随便增加文件夹,规则遵循index文件夹,创建后会自动打包
    ├──img                      放图片的
    ├──lib                      还没想好放点啥，先放点js文件打包试试结果
```