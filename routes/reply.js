const express = require('express')
const router = express.Router()

/* GET reply page. */
router.get('/', function (req, res, next) {
  res.render('reply', { title: 'Thank you - Assessment - Event RSVP Form' })
})

module.exports = router
