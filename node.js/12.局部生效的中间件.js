const express = require('express')
const app = express()

//创建一个中间件函数
const mw =(req,res,next)=>{
  console.log('中间件函数会有next函数进行放行');
  next();
}

//局部生效的中间件
app.get('/user',mw,(req,res)=>{
  res.send('yeah')
})

app.get('/list',(req,res)=>{
  res.send('yeah123')
})

app.listen(8000,()=>{
  console.log('express服务器启动，8000端口监听中...');
})