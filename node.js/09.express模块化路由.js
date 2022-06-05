const express = require('express')

//创建路由对象
const router = express.Router()

//挂载具体的路由
router.get('/user/list',(req,res)=>{
  res.send('路由get请求')
})

router.post('/user/add',(req,res)=>{
  res.send('路由post请求')
})



//向外导出路由对象
module.exports = router



