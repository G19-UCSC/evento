const express = require('express')
const serviceController = require('../controllers/serviceController')
const router = express.Router()

router.route('/').get(serviceController.getAllServices)
router.route('/').post(serviceController.setService)
router.route('/:id').get(serviceController.getService)
router.route('/:id').put(serviceController.updateService)
router.route('/:id').delete(serviceController.deleteService)


module.exports = router 