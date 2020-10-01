const mongoose = require('mongoose')

// define a schema
const Schema = mongoose.Schema

const RSVPSchema = new Schema({
  name: String,
  email: String,
  attending: Boolean,
  guests: Number,
})

// compile model from schema
const RSVPModel = mongoose.model('RSVPModel', RSVPSchema)