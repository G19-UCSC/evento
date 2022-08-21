const express = require('express')
const productPaymentController = require('../controllers/productPaymentController')
const router = express.Router()

// router.route('/').get(productPaymentController.getAllProductPayments)
router.route('/').post(productPaymentController.setProductPayment)
// router.route('/:id').get(productPaymentController.getProductPayment)
// router.route('/:id').put(productPaymentController.updateProductPayment)
// router.route('/:id').delete(productPaymentController.deleteProductPayment)


module.exports = router 