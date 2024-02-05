// Importing the Express framework
const express = require('express')

// Creating a router object using the Express Router middleware
const router = express.Router()

// Importing the Subscriber model from '../models/subscriber' file
const Subscriber = require('../models/subscriber')

// Middleware function to retrieve all subscribers
router.get('/', async (req, res) => {
  try {
    // Finding all subscribers from the MongoDB database
    const subscribers = await Subscriber.find() 
    // Sending the subscribers as a JSON response
    res.json(subscribers)
  } catch (error) {
    // Handling any errors and sending a 500 status code with an error message
    res.status(500).json({ message: err.message })
  }
})

// Middleware function to retrieve a single subscriber by ID
router.get('/:id', getSubscriber, (req, res) => {
  // Sending the retrieved subscriber as a JSON response
  res.json(res.subscriber)
})

// Middleware function to create a new subscriber
router.post('/', async (req, res) => {
  // Creating a new subscriber object using data from the request body
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  })

  try {
    // Saving the new subscriber to the MongoDB database
    const newSubscriber = await subscriber.save()
    // Sending a 201 status code with the newly created subscriber as a JSON response
    res.status(201).json(newSubscriber)
  } catch (error) {
    // Handling any validation errors and sending a 400 status code with an error message
    res.status(400).json({ message: err.message })
  }
})

// Middleware function to update an existing subscriber by ID
router.patch('/:id', getSubscriber, async (req, res) => {
  // Updating subscriber fields if provided in the request body
  if (req.body.name != null ) {
    res.subscriber.name = req.body.name
  }
  if (req.body.subscribedToChannel != null ) {
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel
  }
  try {
    // Saving the updated subscriber to the MongoDB database
    const updatedSubscriber = await res.susbcriber.save()
    // Sending the updated subscriber as a JSON response
    res.json(updatedSubscriber)
  } catch (error) {
    // Handling any validation errors and sending a 400 status code with an error message
    res.status(400).json({ message: err.message })
  }
})

// Middleware function to delete an existing subscriber by ID
router.delete('/:id', getSubscriber, async (req, res) => {
  try {
    // Removing the subscriber from the MongoDB database
    await res.subscriber.remove()
    // Sending a JSON response indicating successful deletion
    res.json({ message: 'Deleted Subscriber' })
  } catch (error) {
    // Handling any errors and sending a 500 status code with an error message
    res.status(500).json({ message: err.message })
  }
})

// Middleware function to retrieve a subscriber by ID and attach it to the request object
async function getSubscriber(req, res, next) {
  let subscriber 
  try {
    // Finding a subscriber by ID from the MongoDB database
    subscriber =  await Subscriber.findById(req.params.id)
    // If subscriber is not found, sending a 404 status code with an error message
    if (subscriber ==  null)
      return res.status(404).json({ message: 'Cannot find subscriber' })
  } catch (error) {
    // Handling any errors and sending a 500 status code with an error message
    return res.status(500).json({ message: err.message })
  }

  // Attaching the retrieved subscriber to the response object
  res.subscriber = subscriber
  next()
}

// Exporting the router object for use in other parts of the application
module.exports = router 
