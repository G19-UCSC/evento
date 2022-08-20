const express = require('express')
const packageController = require('../controllers/packageController')
const router = express.Router()

router.route('/').get(packageController.getAllPackages)
router.route('/').post(packageController.setPackage)
router.route('/:id').get(packageController.getPackage)
router.route('/:id').put(packageController.updatePackage)
router.route('/:id').delete(packageController.deletePackage)


module.exports = router