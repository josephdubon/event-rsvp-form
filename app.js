const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const replyRouter = require('./routes/reply')
const guestsRouter = require('./routes/guests')

const app = express()

// connect to MongoDB through the MongoClient's connect method
const MongoClient = require('mongodb').MongoClient

// connection URL
const url = 'mongodb://localhost:27017'

// connection actions
MongoClient.connect(url, { useUnifiedTopology: true })
  // start .then
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('rsvp')
    const responsesCollection = db.collection('responses')

    // view engine setup
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'pug')

    app.use(logger('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static(path.join(__dirname, 'public')))

    app.use('/', indexRouter)
    app.use('/reply', replyRouter)
    app.use('/guests', guestsRouter)

    // handling rsvp/reply
    app.post('/rsvp', (req, res) => {
      responsesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/reply')
        })
        .catch(error => console.error(error))
    })

// start error handling below this line

// catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404))
    })

// error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get('env') === 'development' ? err : {}

      // render the error page
      res.status(err.status || 500)
      res.render('error')
    })

  })
  // end .then
  .catch(error => console.error(error))

module.exports = app
