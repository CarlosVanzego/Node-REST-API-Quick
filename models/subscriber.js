// Importing mongoose library to interact with MongoDB
const mongoose = require('mongoose')

// Defining a schema for the subscriber collection in the MongoDB database
const subscriberSchema = new mongoose.Schema({
  // Defining the 'name' field with type String, which is required
  name: {
    type: String,
    required: true
  },
  // Defining the 'subscribedToChannel' field with type String, which is required
  subscribedToChannel: {
    type: String,
    required: true
  },
  // Defining the 'subscribeDate' field with type Date, which is required and defaults to the current date and time
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

// Exporting the mongoose model named 'subscriber' based on the defined schema
module.exports = mongoose.model('subscriber', subscriberSchema)
