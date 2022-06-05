//引入模块的时候会自动执行一次模块内部的代码
const hello = require('./01.hello')
//模块内部的变量和方法是有作用域的，只有暴露出去才能访问到
console.log(hello.first);

