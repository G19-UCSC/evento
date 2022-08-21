const controller = require('../controller');
const faqValidator = require('../validators/faqValidator');
const faqService = require('../services/faqService');

const getAllFAQs = async (req, res) => {
    await controller(req, res, {
        validator: faqValidator.getAllFAQs,
        service: faqService.getAllFAQs,
    });
};

const getFAQ = async (req, res) => {
    await controller(req, res, {
        validator: faqValidator.getFAQ,
        service: faqService.getFAQ,
    });
};

const setFAQ = async (req, res) => {
    await controller(req, res, {
        validator: faqValidator.setFAQ,
        service: faqService.setFAQ,
    });
};
const updateFAQ = async (req, res) => {
    await controller(req, res, {
        validator: faqValidator.updateFAQ,
        service: faqService.updateFAQ,
    });
};
const deleteFAQ = async (req, res) => {
    await controller(req, res, {
        validator: faqValidator.deleteFAQ,
        service: faqService.deleteFAQ,
    });
};


module.exports = {
    getFAQ,
    updateFAQ,
    deleteFAQ,
    setFAQ,
    getAllFAQs
}

