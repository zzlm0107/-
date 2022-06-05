const express = require('express')
const app = express()

//express.static方法托管静态资源（路径不需要带有./public）
app.use(express.static('./public'))

//express.static方法托管静态资源，挂载路径前缀
// app.use('/abc',express.static('./public'))

app.listen(8000,()=>{
  console.log('express服务器已启动，8000端口监听中。。。');
})