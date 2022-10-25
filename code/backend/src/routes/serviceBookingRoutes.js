const express = require('express')
const serviceBookingController = require('../controllers/serviceBookingController')
const router = express.Router()

router.route('/').get(serviceBookingController.getAllServiceBookings)
router.route('/').post(serviceBookingController.getServiceBooking)
router.route('/:id').get(serviceBookingController.setServiceBooking)
router.route('/:id').put(serviceBookingController.updateServiceBooking)
router.route('/:id').delete(serviceBookingController.deleteServiceBooking)


module.exports = router 