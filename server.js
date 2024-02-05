// Importing the dotenv package to load environment variables from a .env file
require('dotenv').config()

// Importing the Express framework
const express = require('express')

// Creating an instance of the Express application
const app = express()

// Importing the Mongoose library to interact with MongoDB
const mongoose = require('mongoose')

// Connecting to the MongoDB database using the DATABASE_URL environment variable
mongoose.connect(process.env.DATABASE_URL)

// Accessing the default connection of Mongoose
const db = mongoose.connection

// Handling database connection errors
db.on('error', (error) => console.log(error))

// Executing a callback when the database connection is open
db.once('open', () => console.log('Connected to Database'))

// Middleware to parse JSON requests
app.use(express.json())

// Importing the subscribersRouter from the './routes/subscribers' file
const subscribersRouter = require('./routes/subscribers')

// Using the subscribersRouter middleware for routes starting with '/subscribers'
app.use('/subscribers', subscribersRouter)

// Starting the Express server on port 3000 and logging a message when it starts
app.listen(3000, () => console.log('Server Started'))
