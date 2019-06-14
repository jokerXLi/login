const express = require('express');
const app = express();

// 引入我们抽离出去的路由文件
const userRouter = require('./routes/user');
const goodRouter = require('./routes/good');

// 静态资源托管
app.use(express.static('public'));

// 设置 req.body 中间处理函数
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 设置使用 抽离出去的路由
app.use('/user', userRouter);
app.use('/good', goodRouter);


app.listen(8080);
