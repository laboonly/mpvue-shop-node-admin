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




/**
 * 搜索相关接口
 */
//1.关键词和搜索历史接口
router.get('/search/indexaction', controllers.search.index.indexAction)
//2.搜索提示接口
router.get('/search/helperaction', controllers.search.index.helperAction)
//3.搜索的关键词添加到数据库
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)
//4.清空搜索历史
router.post('/search/clearhistoryAction', controllers.search.index.clearhistoryAction)

module.exports = router