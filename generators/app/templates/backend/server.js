const Koa = require('Koa')
const cors = require('koa-cors')
const app = new Koa()

// 解决跨域
app.use(cors())

app.use((ctx) => {
	const url = ctx.request.url
	if (url === '/api/test') {
		ctx.body = {
			success: true,
			data: {
				msg: url + '请求成功！',
			},
		}
	}
})

app.listen(3000, () => {
	console.log('app started at 3000!')
})
