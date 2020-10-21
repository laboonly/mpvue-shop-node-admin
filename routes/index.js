/*
* ajax 服务路由集合
*/

const router = require('koa-router')({
    prefix: '/ly'
})
// const router = new Router()

const controllers = require('../controllers')

//================================================================自己的接口

// 首页数据
router.get('/index/index', controllers.home.index)


module.exports = router