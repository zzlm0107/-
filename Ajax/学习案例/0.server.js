//引入express
const { request, response } = require('express');
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
// app.get('/', (request,response)=>{
//     //设置响应
//     response.send('hello,express');
// })

//2.get
app.get('/server', (request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('hello,Ajax(get)');
    
})

//3.post
app.post('/server', (request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('hello,Ajax(post)');
    
})

//4.json
//可以接受任何类型的请求
app.all('/json-server', (request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置一个json对象数据响应
    const data = {
        name : '张三',
        age : 18
    }
    //json对象需要以字符串形式传递，需要转换一下
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
})

//5.ie
app.get('/IE', (request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('hello,IE');
    
})

//6.7.8.超时,取消与重复请求
app.post('/dealy',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        response.send('延时3秒响应');
    },3000)
})

//9.fetch服务
app.post('/fetch-server', (request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应头，允许所有请求头格式
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data = {name:'andy123'};
    response.send(JSON.stringify(data));
    
})

//11.axios服务
app.all('/axios-server',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应头，允许所有请求头格式
    response.setHeader('Access-Control-Allow-Headers','*');

    const data = {name:'andy'};
    response.send(JSON.stringify(data));
})



//监听端口响应服务
app.listen(8000, ()=>{
    console.log('服务器已经启动，8000端口监听中...');
})