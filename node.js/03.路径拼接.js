const fs = require('fs')

fs.readFile( __dirname + '/01.hello.js', 'utf8',function (err,res) {
  console.log(err);   //读取成功为null
  console.log(res);
})