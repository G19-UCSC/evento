const express = require('express')
const paymentController = require('../controllers/paymentController')
const router = express.Router()

router.route('/').get(paymentController.getAllPayments)
router.route('/').post(paymentController.setPayment)
router.route('/:id').get(paymentController.getPayment)
router.route('/:id').put(paymentController.updatePayment)
router.route('/:id').delete(paymentController.deletePayment)


module.exports = router 