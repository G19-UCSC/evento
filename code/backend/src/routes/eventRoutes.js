const express = require('express')
const eventController = require('../controllers/eventController')
const router = express.Router()

router.route('/').get(eventController.getAllEvents)
router.route('/').post(eventController.setEvent)
router.route('/:id').get(eventController.getEvent)
router.route('/:id').put(eventController.updateEvent)
router.route('/:id').delete(eventController.deleteEvent)


module.exports = router 