const validate = require('../utilities/validationHelper')
const {
    getAllPackagesSchema,
    getPackageSchema,
    setPackageSchema,
    updatePackageSchema,
    deletePackageSchema
} = require('../schema/packageSchema');

const getAllPackages = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllPackagesSchema(), attributes);
};

const getPackage = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getPackageSchema(), attributes);
};

const setPackage = async (req) => {

    const attributes = {
        createdBy: req.body.createdBy,
        description: req.body.description,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    }

    return validate(setPackageSchema(), attributes);
};

const updatePackage = async (req) => {

    const attributes = {
        id: req.params.id,
        createdBy: req.body.createdBy,
        description: req.body.description,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    }

    return validate(updatePackageSchema(), attributes);
};

const deletePackage = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deletePackageSchema(), attributes);

};

module.exports = {
    getAllPackages,
    getPackage,
    setPackage,
    updatePackage,
    deletePackage
}