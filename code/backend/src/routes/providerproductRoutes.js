const express = require('express')
const providerproductController = require('../controllers/productController')
const router = express.Router()

router.route('/').get(providerproductController.getAllProducts)
router.route('/').post(providerproductController.setProduct)
router.route('/:id').get(providerproductController.getProduct)
router.route('/:id').put(providerproductController.updateProduct)
router.route('/:id').delete(providerproductController.deleteProduct)


module.exports = router