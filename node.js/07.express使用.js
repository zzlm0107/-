const express = require('express')
const app = express()

//get请求,获取query参数与响应
/* app.get('/user',(req,res)=>{
  console.log(req.query);
  res.send({
    name:'za',
    age: 18
  })
}) */
//get请求,动态获取参数与响应
app.get('/user/:id',(req,res)=>{
  console.log(req.params);
  res.send({
    name:'za',
    age: 18
  })
})
app.post('/user',(req,res)=>{
  res.send('post请求成功')
})


app.listen(8000,()=>{
  console.log('express服务器启动，8000端口监听中...');
})