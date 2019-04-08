const userModel = require('../models/user')
const jwt = require('koa-jwt')
const bcrypt = require('bcryptjs')

const postUserAuth = async function(ctx, next) {
  const data = ctx.request.body // 用 post 传过来的数据存放于 request.body
  const userInfo = await userModel.getUserByName(data.name)

  if (userInfo != null) { // 如果查无此用户会返回 null
    if (userInfo.password != data.password) {
      if (!bcrypt.compareSync(data.password, userInfo.password)) {
        ctx.body = { // 返回给前端的数据
          success: false,
          info: '密码错误！'
        }
      }
    } else { // 密码正确
      const userToken = {
        id: userInfo.id,
        name: userInfo.user_name,
        originExp: Date.now() + 60 * 60 * 1000, // 设置过期时间（毫秒）为 1 小时
      }
      const secret = 'vue-koa-demo'; // 指定密钥，这是之后用来判断 token 合法性的标志
      const token = jwt.sign(userToken, secret) // 签发 token
      ctx.body = {
        success: true,
        token: token
      }
    }
  } else {
    ctx.body = {
      success: false,
      info: '用户不存在！'
    }
  }
}

const getUserInfo = async function (ctx, next) {
  console.log(ctx.params)
  const id = ctx.params.id; // 获取 url 里传过来的参数里的 id
  const result = await userModel.getUserById(id)
  ctx.body = result
}

const getUserList = async function(ctx, next) {
  const result = await userModel.getUserList()

  ctx.body = {
    success: true,
    total: result.count,
    list: result.rows,
    msg: '获取用户列表成功！'
  }
}

module.exports = {
  postUserAuth,
  getUserInfo,
  getUserList
}