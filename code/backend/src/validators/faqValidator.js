const validate = require('../utilities/validationHelper')
const {
    getAllFAQsSchema,
    getFAQSchema,
    setFAQSchema,
    updateFAQSchema,
    deleteFAQSchema
} = require('../schema/faqSchema');

const getAllFAQs = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllFAQsSchema(), attributes);
};

const getFAQ = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getFAQSchema(), attributes);
};

const setFAQ = async (req) => {

    const attributes = {
        question: req.body.question,
        answer: req.body.answer
    }

    return validate(setFAQSchema(), attributes);
};

const updateFAQ = async (req) => {

    const attributes = {
        id: req.params.id,
        question: req.body.question,
        answer: req.body.answer
    }

    return validate(updateFAQSchema(), attributes);
};

const deleteFAQ = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deleteFAQSchema(), attributes);

};

module.exports = {
    getAllFAQs,
    getFAQ,
    setFAQ,
    updateFAQ,
    deleteFAQ
}