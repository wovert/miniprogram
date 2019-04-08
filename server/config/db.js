let Sequelize =  require('sequelize')
const db = require('./config').db

// 使用 url 形式连接数据库
const theDb = new Sequelize(`${db.type}://${db.user}:${db.pwd}@${db.host}/${db.name}`, {
  define: {
    timestamps: false // 取消Sequelzie自动给数据表添加的 createdAt 和 updatedAt 两个时间戳字段
  }
})

module.exports = {
  theDb
}
