const validate = require('../utilities/validationHelper')
const {
    getAllEeventsSchema,
    getEventSchema,
    setEventSchema,
    updateEventSchema,
    deleteEventSchema
} = require('../schema/eventSchema');

const getAllEvents = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllEeventsSchema(), attributes);
};

const getEvent = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getEventSchema(), attributes);
};

const setEvent = async (req) => {

    const attributes = {
        title: req.body.title,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        location: req.body.location,
        maxPeople: req.body.maxPeople,
        userid: req.body.userid,
        packageid: req.body.packageid,
        status: req.body.status,
        serviceCharge: req.body.serviceCharge,
        price: req.body.price,
        advance: req.body.advance,
        advanceStatus: req.body.advanceStatus,
        advanceDate: req.body.advanceDate,
        finalPay: req.body.finalPay,
        finalPayStatus: req.body.finalPayStatus,
        finalPayDate: req.body.finalPayDate
    }

    return validate(setEventSchema(), attributes);
};

const updateEvent = async (req) => {

    const attributes = {
        id: req.params.id,
        title: req.body.title,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        location: req.body.location,
        maxPeople: req.body.maxPeople,
        userid: req.body.userid,
        packageid: req.body.packageid,
        status: req.body.status,
        serviceCharge: req.body.serviceCharge,
        price: req.body.price,
        advance: req.body.advance,
        advanceStatus: req.body.advanceStatus,
        advanceDate: req.body.advanceDate,
        finalPay: req.body.finalPay,
        finalPayStatus: req.body.finalPayStatus,
        finalPayDate: req.body.finalPayDate
    }

    return validate(updateEventSchema(), attributes);
};

const deleteEvent = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deleteEventSchema(), attributes);

};

module.exports = {
    getAllEvents,
    getEvent,
    setEvent,
    updateEvent,
    deleteEvent
}