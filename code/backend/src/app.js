const express = require('express')
const db = require('./utilities/dbHelper');
const cors = require('cors')
// const { getevents, setevent } = require('./controller/eventController')
const errorHandler = require('./middlewares/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.port || 5000

// Test DB
db.authenticate()
  .then(()=> console.log('Database connected...'))
  .catch((err)=> console.log('DB Error: '+err))

const app = express()

app.use(cors())
    
// Handle post requests
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Routes
app.use('/api/event', require('./routes/eventRoutes'))
app.use('/api/user', require('./routes/userRoutes'))

// Custom error handler
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server has started on port ${port}`))