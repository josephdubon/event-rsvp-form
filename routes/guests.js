const express = require('express')
const router = express.Router()

/* GET reply page. */
router.get('/', function (req, res, next) {
  res.render('guests', { title: 'Guest List - Assessment - Event RSVP Form' })
})

module.exports = router
