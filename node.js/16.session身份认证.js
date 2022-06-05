const express = require('express')
const app = express()

//配置session中间件
const session = require('express-session')
app.use(
  session({
    secret: 'hello',
    resave: false,
    saveUninitialized: true
  })
)

app.use(express.urlencoded({extended:false}))

//登录，使用session中间件存储用户信息
app.post('/user/login',(req,res)=>{
  if (req.body.username !== 'admin' || req.body.password !== '111111') {
    return res.send({status: 1, msg: '登录失败'})
  }

  req.session.user = req.body;
  req.session.islogin = true;

  res.send({status: 0, msg: '登录成功'})
})

//获取用户名的接口
app.get('/user/username',(req,res)=>{
  if (!req.session.islogin) {
    return res.send({status: 1, msg: '没有登录'})
  }
  res.send({status: 0, msg: 'success', username: req.session.user.username})
})

//退出登录
app.post('/user/logout',(req,res)=>{
  //清空session信息
  req.session.destroy()
  res.send({status: 0, msg: '退出成功'})
})

app.listen(8000,()=>{
  console.log('express服务器启动，8000端口监听中...');
})

