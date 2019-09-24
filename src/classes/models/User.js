const MainModel = require('./MainModel')

class User extends MainModel {
	init() {
		this.collection = 'User'

		this.Schema.add({
			name: String,
			username: {
				type: String,
				required: true,
				index: {
					unique: true
				}
			},
			password: {
				type: String,
				required: true
			},
			email: {
				type: String,
				required: true,
				unique: true
			}
		})
	}

	new(obj) {
		if (typeof obj.username !== 'string') console.error('Err: username is not string')

		const newUser = this.Model(obj)
		newUser.save()
	}
}

module.exports = User
