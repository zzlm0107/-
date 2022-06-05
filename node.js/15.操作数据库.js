//导入mysql模块
const mysql = require('mysql')
//与数据库建立连接关系
const db = mysql.createPool({
  host: '127.0.0.1',      //数据库的ip地址
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'    //指定要操作的数据库
})


//测试能否正常使用
/* db.query('select 1',(err,result)=>{
  if (err !== null) {
    console.log(err.message);
  } else {
    console.log(result);
  }
}) */


//查询数据库数据,查询语句返回的是数组
/* db.query('select * from users',(err,res)=>{
  if (err !== null) {
    console.log(err.message);
  } else {
    console.log(res);
  }
}) */


//向数据库中插入数据
/* let user = {username: 'spiderman', password: '666666'}
//定义一条sql语句，?占位
let sqlStr = 'insert into users (username,password) values (?,?)'

db.query(sqlStr, [user.username,user.password], (err,res)=>{
  if (err !== null) {
    console.log(err.message);
  } 
  if (res.affectedRows === 1) {
    console.log('插入数据成功');
  }
}) */
//快捷插入数据（数据对象的每个属性与数据表一一对应）
/* let user = {username: 'spiderman-2', password: '888888'}
let sqlStr = 'insert into users set ?'
db.query(sqlStr, user, (err,res)=>{
  if (err !== null) {
    console.log(err.message);
  } 
  if (res.affectedRows === 1) {
    console.log('插入数据成功');
  }
}) */


//更新数据
/* let user = {id: 6, username: 'aaa', password: '789789'}
let sqlStr = 'update users set username=?, password=? where id=?'
db.query(sqlStr, [user.username, user.password, user.id], (err,res)=>{
  if (err !== null) {
    console.log(err.message);
  } 
  if (res.affectedRows === 1) {
    console.log('更新数据成功');
  }
}) */


//删除数据
let sqlStr = 'delete from users where id=?'
db.query(sqlStr, 6, (err,res)=>{
  if (err !== null) {
    console.log(err.message);
  } 
  if (res.affectedRows === 1) {
    console.log('删除数据成功');
  }
})