const router = require('koa-router')()

// const routerDemo = require('../routes/demo')
const routerUser = require('../routes/user')

// router.use('/demo', routerDemo)
router.use(routerUser)

module.exports = router