const express = require('express')
const eventProviderController = require('../controllers/eventProviderController')
const router = express.Router()

router.route('/').get(eventProviderController.getAllEventProviders)
router.route('/').post(eventProviderController.setEventProvider)
router.route('/:id').get(eventProviderController.getEventProvider)
router.route('/:id').put(eventProviderController.updateEventProvider)
router.route('/:id').delete(eventProviderController.deleteEventProvider)


module.exports = router 