const validate = require('../utilities/validationHelper')
const {
    getAllEventProvidersSchema,
    getEventProviderSchema,
    setEventProviderSchema,
    updateEventProviderSchema,
    deleteEventProviderSchema
} = require('../schema/eventProviderSchema');

const getAllEventProviders = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllEventProvidersSchema(), attributes);
};

const getEventProvider = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getEventProviderSchema(), attributes);
};

const setEventProvider = async (req) => {

    const attributes = {
        eventid: req.body.eventid,
        providerid: req.body.providerid,
        productid: req.body.productid,
        status: req.body.status,
        providerpay: req.body.providerpay,
        providerpay_status: req.body.providerpay_status,
        providerpay_date: req.body.providerpay_date,
    }

    return validate(setEventProviderSchema(), attributes);
};

const updateEventProvider = async (req) => {

    const attributes = {
        id: req.params.id,
        eventid: req.body.eventid,
        providerid: req.body.providerid,
        productid: req.body.productid,
        status: req.body.status,
        providerpay: req.body.providerpay,
        providerpay_status: req.body.providerpay_status,
        providerpay_date: req.body.providerpay_date,
    }

    return validate(updateEventProviderSchema(), attributes);
};

const deleteEventProvider = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deleteEventProviderSchema(), attributes);

};

module.exports = {
    getAllEventProviders,
    getEventProvider,
    setEventProvider,
    updateEventProvider,
    deleteEventProvider
}