const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')   //将信息加密为token
const expressJWT = require('express-jwt')       //将token还原为json数据,这是一个中间件

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({extended:false}))

//定义一个secret密钥
const secretKey = 'hello'

//使用expressJWT中间件解析token  配置成功就会有req.user
app.use(expressJWT({secret: secretKey, algorithms:['HS256']}).unless({path: [ /^\/api\// ]}))


//登录，使用存储用户信息,不需要权限
app.post('/api/login',(req,res)=>{
  let userinfo = req.body;
  if (userinfo.username !== 'admin' || userinfo.password !== '111111') {
    return res.send({status: 400, msg: '登录失败'})
  }
  //生成token  三个参数  加密的信息对象，加密的密钥，配置对象
  let tokenStr = jwt.sign({username:userinfo.username},secretKey,{expiresIn: '60s'})
  res.send({code: 200, msg: '登录成功',token:tokenStr})
})



//使用全局错误处理中间件，捕获token过期错误
app.use((err,req,res,next)=>{
  if (err.name === 'UnauthorizedError') {
    res.send({
      code:401,
      msg: '无效的token'
    })
  } else {
    res.send({
      code:500,
      msg: '未知错误'
    })
  }
})


//获取用户名。需要权限
app.get('/user/username',(req,res)=>{
  res.send({status: 200, msg: 'success', username: req.user})
})



app.listen(8000,()=>{
  console.log('express服务器启动，8000端口监听中...');
})