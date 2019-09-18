const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const mainRouter = require('./routes/main')
const apiRouter = require('./routes/api')

const app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'pug'));
// app.set('view engine', 'pug');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', mainRouter);
app.use('/api', apiRouter);

app.use((req, res, next) =>
	next(createError(404))
)

app.use((err, req, res, next) => {
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	res.status(err.status || 500)
	res.render('error')
})

const debug = require('debug')('Web-OS:server')
const http = require('http')

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const server = http.createServer(app)

server.on('error', onError)
server.on('listening', onListening)
server.listen(port)

function normalizePort(val) {
	const port = parseInt(val, 10)

	if (isNaN(port)) return val

	if (port >= 0) return port

	return false
}

function onError(error) {
	if (error.syscall !== 'listen') throw error

	const bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port

	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges')
			process.exit(1)
			break
		case 'EADDRINUSE':
			console.error(bind + ' is already in use')
			process.exit(1)
			break
		default:
			throw error
	}
}

function onListening() {
	const addr = server.address()
	const bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port
	debug('Listening on ' + bind)
}
