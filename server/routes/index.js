
const router = app => {
	
	/* Welcome Page */
	app.get('/', (req, res) => res.json({ message : 'Welcome to Web OS' }))

	/* Error Page */
	app.use((req, res) => res.json({ message : 'Not found.' }))
	
	if(process.env.NODE_ENV != 'production'){
		app.use((err, req, res) => {
			res.status(err.status || 500)
			res.json({
				errors	: {
					message	: err.message,
					error	: err
				}
			})
		})
	}

	/* Routes */

}

module.exports	= router
