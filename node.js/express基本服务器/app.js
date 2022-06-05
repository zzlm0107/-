const express = require('express')
const app = express()
const cors = require('cors')

//引入路由
const router = require('./apiRouter')

app.use(express.urlencoded({extended: false}))
app.use(cors())

//注册路由
app.use('/api',router)


app.listen(8000,()=>{
  console.log('express服务器已启动，8000端口监听中。。。');
})