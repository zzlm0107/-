-- 检索全部的数据，用*通配符
-- select * from users

-- 检索对应的列 
-- select username, password from users

# 插入数据
# insert into users (username,password) values ('老六','333444')

# 更新某一行某一列的数据
# update users set password='888888' where id=2

# 更新某一行若干列的数据
# update users set password='abcdef',status=1 where id=2

# 删除表中的某一行数据
# delete from users where id=2

/* 使用where子句过滤数据 */
-- select * from users where username<>'老六'

/* 使用and和or连接条件 */
-- select * from users where username<>'老六' and id>=3

# 排序
# select * from users order by password                          -- 默认升序排序
# select * from users order by password desc                     -- desc 表示降序排序
# select * from users order by password desc, username asc         -- 多重排序 

# 使用count(*)来统计数据
# select count(*) from users where status=0

# 使用as 来给列起别名
-- select count(*) as total from users where status=0