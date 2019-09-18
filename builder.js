const fs = require('fs-extra')

fs.copy('src/public', 'build', (err) => {
	if (err) throw err
	console.log('public folder copied to build')
})

fs.copy('src/view/', 'build/public', (err) => {
	if (err) throw err
	console.log('view folder copied to build public')
})

fs.copyFile('src/server.js', 'build/server.js', (err) => {
	if (err) throw err
	console.log('server file copied to build')
})

fs.copy('src/routes', 'build/routes', (err) => {
	if (err) throw err
	console.log('route folder copied to build routes')
})

fs.copy('src/http', 'build/http', (err) => {
	if (err) throw err
	console.log('http folder copied to build http')
})
