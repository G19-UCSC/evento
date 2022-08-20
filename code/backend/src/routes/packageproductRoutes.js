const express = require('express')
const packageproductController = require('../controllers/packageproductController')
const router = express.Router()

router.route('/').get(packageproductController.getAllPackageproducts)
router.route('/').post(packageproductController.setPackageproduct)
router.route('/:id').get(packageproductController.getPackageproduct)
router.route('/:id').put(packageproductController.updatePackageproduct)
router.route('/:id').delete(packageproductController.deletePackageproduct)


module.exports = router