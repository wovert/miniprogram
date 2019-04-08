const Koa = require('koa')
const router = require('./config/router')

const app = new Koa()
const port = 3000

app.use(router.routes()) // 启动路由
.use(router.allowedMethods()) // 在当所有路由中间件最后调用.此时根据ctx.status设置response响应头

// 监听3000端口
app.listen(port)