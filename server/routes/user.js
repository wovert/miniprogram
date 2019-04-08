const router = require('koa-router')()
const userController = require('../controllers/user')

router.post('/user', userController.postUserAuth)
router.get('/user/:id', userController.getUserInfo)
router.post('/user/list', userController.getUserList)

module.exports = router.routes()