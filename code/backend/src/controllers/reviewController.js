const controller = require('../controller');
const reviewValidator = require('../validators/reviewValidator');
const reviewService = require('../services/reviewService');

const getAllReviews = async (req, res) => {
    await controller(req, res, {
        validator: reviewValidator.getAllReviews,
        service: reviewService.getAllReviews,
    });
};

const getReview = async (req, res) => {
    await controller(req, res, {
        validator: reviewValidator.getReview,
        service: reviewService.getReview,
    });
};

const setReview = async (req, res) => {
    await controller(req, res, {
        validator: reviewValidator.setReview,
        service: reviewService.setReview,
    });
};
const updateReview = async (req, res) => {
    await controller(req, res, {
        validator: reviewValidator.updateReview,
        service: reviewService.updateReview,
    });
};
const deleteReview = async (req, res) => {
    await controller(req, res, {
        validator: reviewValidator.deleteReview,
        service: reviewService.deleteReview,
    });
};


module.exports = {
    getAllReviews,
    updateReview,
    deleteReview,
    setReview,
    getReview
}

