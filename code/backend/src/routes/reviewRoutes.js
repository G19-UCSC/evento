const express = require('express')
const reviewController = require('../controllers/reviewController')
const router = express.Router()

router.route('/').get(reviewController.getAllReviews)
router.route('/').post(reviewController.setReview)
router.route('/:id').get(reviewController.getReview)
router.route('/:id').put(reviewController.updateReview)
router.route('/:id').delete(reviewController.deleteReview)


module.exports = router 