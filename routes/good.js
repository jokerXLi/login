// 这是专门用来处理商品的路由请求
const express = require('express');
const router = express.Router();
const GoodModel = require('../model/good');

// 添加商品 localhost:8080/good/add
router.post('/add', (req, res) => {
  let good = new GoodModel(req.body);
  good.save().then(data => {
    res.send({
      code: 0,
      msg: '添加成功'
    })
  }).catch(error => {
    console.log(error);
    res.send({
      code: -1,
      msg: '添加失败'
    })
  })
})

module.exports = router;
