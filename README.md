# Subscriber Management System

This project is a simple Subscriber Management System built with Node.js, Express, and MongoDB. It allows you to perform CRUD operations on subscribers, including creating, reading, updating, and deleting subscriber information.

## Features

- **Create**: Add new subscribers with their name and subscribed channel.
- **Read**: View all subscribers or retrieve a specific subscriber by ID.
- **Update**: Modify subscriber details such as name or subscribed channel.
- **Delete**: Remove a subscriber from the database.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>


**Install dependencies:**
npm install

**Set up environment variables:**
Create a .env file in the root directory and define the following variables:
DATABASE_URL=<your_mongodb_connection_string>

**Start the server:**
npm start


**Usage**
- Access the application through a web browser or use API endpoints with tools like Postman.
- Navigate to http://localhost:3000/subscribers to view all subscribers.
- Use HTTP methods (GET, POST, PATCH, DELETE) to perform operations on subscribers.

**API Endpoints**
- GET /subscribers: Retrieve all subscribers.
- GET /subscribers/:id: Retrieve a specific subscriber by ID.
- POST /subscribers: Add a new subscriber.
- PATCH /subscribers/:id: Update an existing subscriber.
- DELETE /subscribers/:id: Delete a subscriber.

**Technologies Used**
- Node.js
- Express
- MongoDB
- Mongoose
