const fs		= require('fs')
const mongoose	= require('mongoose')

const connectDB = async () => {

	/* Load Models */
	fs.readdirSync(__dirname + '/models').forEach(model => {
		if(model === 'index.js') return;
		require(__dirname + '/models/' + model)
	})

	try{
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser	: true,
			useCreateIndex		: true,
			useFindAndModify	: false,
			useUnifiedTopology	: true
		})

		console.log('[DB] Connected!')

	}catch(err){
		console.log('[DB] Error!', err.message)
		process.exit()
	}

}

module.exports = connectDB