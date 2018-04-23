require('dotenv').config()

const app = require('express')(),
  {json} = require('body-parser'),
  {CONNECTION_STRING, PORT = 3001} = process.env,
  mongoose = require('mongoose')
  routes = require('./routes')

app.use(json())

mongoose.connect(CONNECTION_STRING)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(`Error Connecting to DB: ${err}`))

routes(app)

app.listen(PORT, console.log(`Listening on port: ${PORT}`))