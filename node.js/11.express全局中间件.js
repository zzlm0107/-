const express = require('express')
const app = express()

//创建一个中间件函数
const mw =(req,res,next)=>{
  let time = Date.now()
  //上游中间件添加数据给下游使用
  req.startTime = time;
  console.log('中间件函数会有next函数进行放行');
  next();
}

//注册全局生效的中间件
app.use(mw);

app.get('/user',(req,res)=>{
  res.send('yeah' + req.startTime)
})

app.listen(8000,()=>{
  console.log('express服务器启动，8000端口监听中...');
})