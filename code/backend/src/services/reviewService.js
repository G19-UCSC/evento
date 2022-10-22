const REVIEW = require("../models/review");

const getAllReviews = async () => {

    // fetch list of events
    const reviews = await REVIEW.findAll();

    return {
        reviews,
    };
};

const getReview = async (attributes) => {

    // fetch one event
    const review = await REVIEW.findByPk(attributes.id);

    return {
        review
    };
};

const setReview = async (attributes) => {

    // create one event
    const review = await REVIEW.create({
        productid: attributes.productid,
        userid: attributes.userid,
        review: attributes.review,
        rating: attributes.rating
    }).then((res) => {
        console.log(`Insert successful: ${res._id}`);
        return {
            res
        };
    }).catch((err) => {
        console.log(`Error: ${err}`);
    });

    return {
        review
    };
};

const updateReview = async (attributes) => {

    // update one event
    const review = await REVIEW.update({
        productid: attributes.productid,
        userid: attributes.userid,
        review: attributes.review,
        rating: attributes.rating
    }, {
        where: { _id: attributes.id },
        returning: true,
        plain: true
    }).then((res) => {
        console.log(`Update successful: ${res._id}`);
        return {
            res
        };
    }).catch((err) => {
        console.log(`Error: ${err}`);
    });

    return {
        review
    };
};

const deleteReview = async (attributes) => {

    // delete one event
    const review = await REVIEW.destroy({
        where: { _id: attributes.id },
    });

    return {
        review
    };
};


module.exports = {
    getAllReviews,
    getReview,
    setReview,
    updateReview,
    deleteReview
}