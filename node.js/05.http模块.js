const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
  // console.log(req);
  //设置响应头，解决中文乱码的问题
  res.setHeader('Content-type','text/html;charset=utf-8')
  res.end('你好');
})

server.listen(8000,()=>{
  console.log('服务器已经启动，8000端口监听中...');
})