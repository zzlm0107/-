const fs = require('fs')

fs.readFile('./01.hello.js', 'utf8',function (err,res) {
  console.log(err);   //读取成功为null
  console.log(res);
})

fs.writeFile('./01.hello.js','11111',function (err,res) {
    //读取成功为null
    if (err !== null) {
      console.log(err); 
    } else {
      console.log('写入成功'); 
    }

})