const validate = require('../utilities/validationHelper')
const {
    getAllSystemsSchema,
    getSystemSchema,
    setSystemSchema,
    updateSystemSchema,
    deleteSystemSchema
} = require('../schema/systemSchema');

const getAllSystems = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllSystemsSchema(), attributes);
};

const getSystem = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getSystemSchema(), attributes);
};

const setSystem = async (req) => {

    const attributes = {
        location: req.body.location,
        contact_no: req.body.contact_no,
        penalty_rate: req.body.penalty_rate,
        service_rate: req.body.service_rate,
        advance_rate: req.body.advance_rate,
    }

    return validate(setSystemSchema(), attributes);
};

const updateSystem = async (req) => {

    const attributes = {
        location: req.body.location,
        contact_no: req.body.contact_no,
        penalty_rate: req.body.penalty_rate,
        service_rate: req.body.service_rate,
        advance_rate: req.body.category,
    }

    return validate(updateSystemSchema(), attributes);
};

const deleteSystem = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deleteSystemSchema(), attributes);

};

module.exports = {
    getAllSystems,
    getSystem,
    setSystem,
    updateSystem,
    deleteSystem
}