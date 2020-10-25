const Koa = require('koa')
const debug = require('debug')('koa-weapp-demo')
const config = require('./config')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

// 使用响应处理中间件
app.use(response)
// 解析请求体
app.use(bodyParser())
//路由分发
const router = require('./routes')
app.use(router.routes())
// 启动程序，监听端口
app.listen(config.port, () => {console.log(`listening on port ${config.port}`)})
