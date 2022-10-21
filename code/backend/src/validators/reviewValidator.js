const validate = require('../utilities/validationHelper')
const {
    getAllReviewsSchema,
    getReviewSchema,
    setReviewSchema,
    updateReviewSchema,
    deleteReviewSchema
} = require('../schema/reviewSchema');

const getAllReviews = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllReviewsSchema(), attributes);
};

const getReview = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getReviewSchema(), attributes);
};

const setReview = async (req) => {

    const attributes = {
        productid: req.body.productid,
        userid: req.body.userid,
        review: req.body.review,
        rating: req.body.rating
    }

    return validate(setReviewSchema(), attributes);
};

const updateReview = async (req) => {

    const attributes = {
        id: req.params.id,
        productid: req.body.productid,
        userid: req.body.userid,
        review: req.body.review,
        rating: req.body.rating
    }

    return validate(updateReviewSchema(), attributes);
};

const deleteReview = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deleteReviewSchema(), attributes);

};

module.exports = {
    getAllReviews,
    getReview,
    setReview,
    updateReview,
    deleteReview
}