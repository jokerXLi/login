# 使用

1. express mongoose
   npm install --save express mongoose

2. 通过 mongoose 链接数据库
3. 编写 Schema
   1. schema 是一种数据格式，规定我数据库中某个集合中的数据格式
   ```js
    var kittySchema = mongoose.Schema({
      // 数据格式
      // key : value
      // key -> 这个集合的属性
      // value -> 规定这个属性的数据类型
      name: String
    }, {
      collection: 'user', // 设置表名。
    });
   ```
4. model (数据模型) ,后续操作数据库的主要东西，它需要基于 Schema 来创建出来。
   ```js
    var CatModel = mongoose.model('user', 要生成这个model的schema)

    CatModel.find()

    // 这个 model 所操作的是什么表（集合），是根据这边的 model的名字 来确定
    // 名字写单数形式，表名会是 复数形式。
    // 如果你就想要表名叫 user
   ```
