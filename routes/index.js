/*
* ajax 服务路由集合
*/

const router = require('koa-router')({
    prefix: '/heyushuo'
})
// const router = new Router()
const controllers = require('../controllers')

// 首页数据
router.get('/index/index', controllers.home.index)


module.exports = router