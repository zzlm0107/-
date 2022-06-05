const path =  require('path')
const fs = require('fs')

//path.join()路径拼接
/* let = testPath = path.join('/a','/b/c','../../','/d')
console.log(testPath); */

//路径拼接使用path.join()，不要用 +
/* fs.readFile(path.join(__dirname,'/01.hello.js'),'utf8', (err,res)=>{
  if (err !== null) {
    console.log(err);
  } else {
    console.log(res);
  }
}) */

//path.basename获取路径中的文件名
/* let fpath = '/a/b/b/index.html'
let fullname = path.basename(fpath,'.html')
console.log(fullname); */


//path.extname获取路径中的文件后缀名
let fpath = '/a/b/b/index.html'
let extname = path.extname(fpath)
console.log(extname);