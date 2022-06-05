const express = require('express')
const app = express()
const router = express.Router()

//1    应用级别的中间件（包括全局和局部中间件），中间件绑定到了app实例上
/* app.use((req,res,next)=>{
  console.log('应用级别的中间件');
  next();
}) */

//2     路由级别的中间件，中间件绑定到了router实例上
/* router.use((req,res,next)=>{
  console.log('路由级别的中间件');
  next();
}) */

//3       错误级别的中间件,用于捕获项目错误
/* app.use((err,req,res,next)=>{
  console.log(err.message);
  res.send('错误级别的中间件,用于捕获项目错误')
}) */

//4      内置的中间件

//express.static()中间件托管静态资源
// app.use(express.static('./public'))

//express.json()中间件解析post请求的json数据   application/json
// app.use(express.json())

//express.urlencoded()中间件解析post请求的键队数据   application/x-www-form-urlencoded
// app.use(express.urlencoded({extended: false}))


//5  第三方中间件
const parser = require('body-parser')
app.use(parser.urlencoded({extended: false}))



app.post('/list',(req,res)=>{
  //不解析数据的话req.body就是undefinded
  console.log(req.body);
  res.send('ok')
})


app.listen(8000,()=>{
  console.log('express服务器启动，8000端口监听中...');
})