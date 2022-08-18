const express = require('express')
const eventController = require('../controllers/productController')
const router = express.Router()

router.route('/').get(productController.getAllProducts)
router.route('/').post(productController.setProduct)
router.route('/:id').get(productController.getProduct)
router.route('/:id').put(productController.updateProduct)
router.route('/:id').delete(productController.deleteProduct)


module.exports = router 