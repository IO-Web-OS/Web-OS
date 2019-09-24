const mongoose = require('mongoose')
const Schema = mongoose.Schema

class MainModel {
	constructor(obj = null, building = false) {
		this.db = mongoose.createConnection('mongodb+srv://root:nQAwr7MSnu85Ks5L@webos-kn2lx.mongodb.net/WebOS',
			{useNewUrlParser: true})
			.catch(err => console.error(err))

		this.building = building
		this.Schema = new Schema()
		this.collection = 'Main'
		this.init()

		this.Model = this.db.model(this.collection, this.Schema)
	}

	init() {}
}

module.exports = MainModel
