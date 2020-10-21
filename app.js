const Koa = require('koa')

const config = require('./config')

const app = new Koa()


//路由分发
const router = require('./routes')
app.use(router.routes())

app.listen(config.port, () => {console.log(`listening on port ${config.port}`)})