const FAQ = require("../models/faq");

const getAllFAQs = async () => {

    // fetch list of events
    const faqs = await FAQ.findAll();

    return {
        faqs,
    };
};

const getFAQ = async (attributes) => {

    // fetch one event
    const faq = await FAQ.findByPk(attributes.id);

    return {
        faq
    };
};

const setFAQ = async (attributes) => {

    // create one event
    const faq = await FAQ.create({
        question: attributes.question,
        answer: attributes.answer
    }).then((res) => {
        console.log(`Insert successful: ${res._id}`);
        return {
            res
        };
    }).catch((err) => {
        console.log(`Error: ${err}`);
    });

    return {
        faq
    };
};

const updateFAQ = async (attributes) => {

    // update one event
    const faq = await FAQ.update({
        question: attributes.question,
        answer: attributes.answer
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
        faq
    };
};

const deleteFAQ = async (attributes) => {

    // delete one event
    const faq = await FAQ.destroy({
        where: { _id: attributes.id },
    });

    return {
        faq
    };
};


module.exports = {
    getAllFAQs,
    getFAQ,
    setFAQ,
    updateFAQ,
    deleteFAQ
}