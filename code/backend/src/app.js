const express = require('express')
const db = require('./utilities/dbHelper');
const cors = require('cors')
// const { getevents, setevent } = require('./controller/eventController')
const errorHandler = require('./middlewares/errorMiddleware')
const dotenv = require('dotenv').config()
const multer = require("multer");
// const upload = multer({dest: '../../uploads/'})
const port = process.env.port || 5000

const storageAdmin = multer.diskStorage({
  destination: '../../code/frontend/admin/public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null,  uniqueSuffix + '-' + file.originalname)
  }
})

const uploadAdmin = multer({ storage: storageAdmin })

const storagePortal = multer.diskStorage({
  destination: '../../code/frontend/portal/public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null,  uniqueSuffix + '-' + file.originalname)
  }
})

const uploadPortal = multer({ storage: storagePortal })

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('DB Error: ' + err))

const app = express()

app.use(cors())

// Handle post requests
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/event', require('./routes/eventRoutes'))
app.use('/api/eventstaff', require('./routes/eventstaffRoutes'))
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/ruser', require('./routes/registereduserRoutes'))
app.use('/api/product', require('./routes/productRoutes'))
app.use('/api/review', require('./routes/reviewRoutes'))

app.use('/api/payment', require('./routes/paymentRoutes'))
app.use('/api/productPayment', require('./routes/productPaymentRoutes'))
app.use('/api/package', require('./routes/packageRoutes'))
app.use('/api/packageproduct', require('./routes/packageproductRoutes'))
app.use('/api/system', require('./routes/systemRoutes'))
app.use('/api/service', require('./routes/serviceRoutes'))
app.use('/api/faq', require('./routes/faqRoutes'))
app.use('/api/eventProvider', require('./routes/eventProviderRoutes'))
app.use('/api/provider', require('./routes/providerRoutes'))

app.post("/api/uploadAdmin",uploadAdmin.single('files'), uploadFile);
function uploadFile(req,res){
  console.log(req.body);
  console.log(req.file)
  res.json({message: "Upload Successful", path: req.file.filename})
}

app.post("/api/uploadPortal",uploadPortal.single('files'), uploadFile);


// Custom error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server has started on port ${port}`))