// 这个文件，用来链接数据库
//安装mongoose;npm i --save express mongoose
// 1. 引入mongoose
const mongoose = require('mongoose');
// 2. 定义链接的地址 - hello 是数据库的名字
const url = 'mongodb://localhost:27017/sz1904';
// 3. 使用 mongoose 去链接这个地址
mongoose.connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('数据库链接成功');
  })
  .catch(() => {
    console.log('数据库链接失败');
  })
// 4. 将 mongoose 暴露出去
module.exports = mongoose;
