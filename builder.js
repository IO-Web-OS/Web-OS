const fs = require('fs-multi')

fs.multi('copy', {
	'src/public': 'build',
	'src/view/': 'build/public',
	'src/server.js': 'build/server.js',
	'src/routes': 'build/routes',
	'src/classes': 'build/classes',
	'src/bin': 'build/bin'
})
