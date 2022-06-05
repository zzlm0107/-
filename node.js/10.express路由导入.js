const express = require('express')
const app = express()

//导入模块路由
const router = require('./09.express模块化路由')
//注册路由
// app.use(router)

//添加路由前缀
app.use('/api',router)

app.listen(8000,()=>{
  console.log('express服务器启动，8000端口监听中...');
})