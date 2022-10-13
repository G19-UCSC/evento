const validate = require('../utilities/validationHelper')
const {
    getAllEventstaffSchema,
    getEventstaffSchema,
    setEventstaffSchema,
    updateEventstaffSchema,
    deleteEventstaffSchema
} = require('../schema/eventstaffSchema');

const getAllEventstaff = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllEventstaffSchema(), attributes);
};

const getEventstaff = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getEventstaffSchema(), attributes);
};

const setEventstaff = async (req) => {

    const attributes = {
        eventid: req.body.eventid,
        userid: req.body.userid,
        status: req.body.status
    }

    return validate(setEventstaffSchema(), attributes);
};

const updateEventstaff = async (req) => {

    const attributes = {
        id: req.params.id,
        eventid: req.body.eventid,
        userid: req.body.userid,
        status: req.body.status
    }

    return validate(updateEventstaffSchema(), attributes);
};

const deleteEventstaff = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deleteEventstaffSchema(), attributes);

};

module.exports = {
    getAllEventstaff,
    getEventstaff,
    setEventstaff,
    updateEventstaff,
    deleteEventstaff
}