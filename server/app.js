require('dotenv').config()

const express		= require('express')
const bodyParser	= require('body-parser')

const app			= express()

/* Middlewares */
app.use(express.json({ extended : false }))
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

/* Database */
require('./db')()

/* Routes */
require('./routes')(app)

const port	= 5000 || process.env.PORT
app.listen(port, () => console.log(`Server ready on https://webos.ibrahimozturk.me/`))