const express = require('express')
const faqController = require('../controllers/faqController')
const router = express.Router()

router.route('/').get(faqController.getAllFAQs)
router.route('/').post(faqController.setFAQ)
router.route('/:id').get(faqController.getFAQ)
router.route('/:id').put(faqController.updateFAQ)
router.route('/:id').delete(faqController.deleteFAQ)


module.exports = router 