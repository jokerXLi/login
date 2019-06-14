// 这是专门处理用户相关的路由请求
const express = require('express');
const router = express.Router();
const UserModel = require('../model/user');

// 注册用户 http://localhost:8080/user/add  POST
router.post('/add', (req, res) => {
  // 1. 接收到前端传递过来的参数
  // let username = req.body.username;
  // let password = req.body.password;
  // let age = req.body.age;
  // le

  // 2. 校验数据的有效性

  // 3. 写入数据库的  表中

  // 查询是否已经存在当前用户
  UserModel.findOne({
    username: req.body.username
  }).then(data => {
    if (data) {
      // 已经注册
      res.send({
        code: -1,
        msg: '用户已存在'
      })
    } else {
      // 没有注册，可以注册
      let user = new UserModel(req.body);
      user.save().then(data => {
        console.log(data);
        res.send({
          code: 0,
          msg: '注册成功',
        })
      }).catch(error => {
        console.log(error);
        res.send({
          code: -1,
          msg: '注册失败'
        })
      })
    }
  })
})

// 登录 http://localhost:8080/user/login  POST
router.post('/login', (req, res) => {
  // 1. 接收前端的参数
  let username = req.body.username;
  let password = req.body.password;

  // 2. 查询数据库中是否有这个数据
  // UserModel.find({
  //   username: username,
  //   password: password
  // }).then(data => {
  //   // then 是这个find 操作成功，catch find操作失败
  //   // 能不能登录成功，还需要看 data 是否有数据
  //   console.log(data);
  //   if (data.length > 0) {
  //     res.send({
  //       code: 0,
  //       msg: '登录成功'
  //     })
  //   } else {
  //     res.send({
  //       code: -1,
  //       msg: '用户名或密码错误'
  //     })
  //   }

  // }).catch(error => {
  //   console.log(error);
  //   res.send({
  //     code: -1,
  //     msg: '登录失败'
  //   })
  // })

  UserModel.findOne({
    username: username,
    password: password
  }).then(data => {
    // then 是这个find 操作成功，catch find操作失败
    // 能不能登录成功，还需要看 data 是否有数据
    console.log(data);
    if (data) {
      res.send({
        code: 0,
        msg: '登录成功'
      })
    } else {
      res.send({
        code: -1,
        msg: '用户名或密码错误'
      })
    }

  }).catch(error => {
    console.log(error);
    res.send({
      code: -1,
      msg: '登录失败'
    })
  })
})

// 暴露 router
module.exports = router;
