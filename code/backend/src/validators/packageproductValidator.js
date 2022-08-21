const validate = require('../utilities/validationHelper')
const {
    getAllPackageproductsSchema,
    getPackageproductSchema,
    setPackageproductSchema,
    updatePackageproductSchema,
    deletePackageproductSchema
} = require('../schema/packageproductSchema');

const getAllPackageproducts = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllPackageproductsSchema(), attributes);
};

const getPackageproduct = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getPackageproductSchema(), attributes);
};

const setPackageproduct = async (req) => {

    const attributes = {
        packageid: req.body.packageid,
        productid: req.body.productid,
    }

    return validate(setPackageproductSchema(), attributes);
};

const updatePackageproduct = async (req) => {

    const attributes = {
        packageid: req.body.packageid,
        productid: req.body.productid,
    }

    return validate(updatePackageproductSchema(), attributes);
};

const deletePackageproduct = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deletePackageproductSchema(), attributes);

};

module.exports = {
    getAllPackageproducts,
    getPackageproduct,
    setPackageproduct,
    updatePackageproduct,
    deletePackageproduct
}