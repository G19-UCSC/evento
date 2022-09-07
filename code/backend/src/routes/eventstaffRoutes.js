const express = require('express')
const eventstaffController = require('../controllers/eventstaffController')
const router = express.Router()

router.route('/').get(eventstaffController.getAllEventstaff)
router.route('/').post(eventstaffController.setEventstaff)
router.route('/:id').get(eventstaffController.getEventstaff)
router.route('/:id').put(eventstaffController.updateEventstaff)
router.route('/:id').delete(eventstaffController.deleteEventstaff)


module.exports = router 