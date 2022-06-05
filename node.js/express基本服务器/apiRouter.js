const express = require('express')
const router = express.Router()

router.get('/user',(req,res)=>{
  let query = req.query;
  res.send({
    code:200,   //状态标识
    msg: 'get请求成功',    //状态描述
    data: query     //响应数据
  })
})

router.post('/list',(req,res)=>{
  let body = req.body;
  res.send({
    code:200,   //状态标识
    msg: 'post请求成功',    //状态描述
    data: body     //响应数据
  })
})




module.exports = router