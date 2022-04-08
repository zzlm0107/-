const express = require('express');

const app = express();

// 10.同源策略
app.get('/home',(request,response)=>{
    //响应一个页面
    response.sendFile(__dirname + '/10.同源策略.html');
})
app.get('/data',(request,response)=>{
    response.send('用户数据');
})

app.listen(9000,()=>{
    console.log('服务器已经启动，9000端口监听中...');
})