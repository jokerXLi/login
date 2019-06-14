// 这个文件是用来创建于 users 表相关的 model 的文件
// 1. 引入 已经连接到数据库的  mongoose
const db = require('../config/db.js');
// 2. 定义 Schema
const schema = db.Schema({
  username: {
    type: String,
    required: true, // 必须要传递
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18, // 设置默认值
  },
  sex: {
    type: Number,
    default: 1, // 1-男 0-女
  },
  avatar: {
    type: String,
    default: 'http://localhost:8080/avatar.jpg'
  }
});
// 3. 创建 Model
const UserModel = db.model('user', schema);
// 4. end 暴露出去这个 Model
module.exports = UserModel;
