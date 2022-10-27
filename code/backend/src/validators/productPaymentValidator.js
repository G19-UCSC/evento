const validate = require('../utilities/validationHelper')
const {
    getAllProductPaymentsSchema,
    getProductPaymentSchema,
    setProductPaymentSchema,
    updateProductPaymentSchema,
    deleteProductPaymentSchema
    
} = require('../schema/productPaymentSchema');

const getAllProductPayments = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllProductPaymentsSchema(), attributes);
};

const getProductPayment= async (req) => {

    const attributes = { id: req.params.id }

    return validate(getProductPaymentSchema(), attributes);
};

const setProductPayment = async (req) => {

    const attributes = {
        userid: req.body.userid,
        productid: req.body.productid,
        quantity: req.body.quantity,
        purchaseDate: req.body.purchaseDate,
        price: req.body.price,
        commission: req.body.commission,
        CusPayStatus: req.body.CusPayStatus,
        CusPayDate: req.body.CusPayDate,
        ProviderPayStatus: req.body.ProviderPayStatus,
        ProviderPayDate: req.body.ProviderPayDate,
    }

    return validate(setProductPaymentSchema(), attributes);
};

const updateProductPayment= async (req) => {

    const attributes = {
        id: req.params.id,
        userid: req.body.userid,
        productid: req.body.productid,
        quantity: req.body.quantity,
        purchaseDate: req.body.purchaseDate,
        price: req.body.price,
        commission: req.body.commission,
        CusPayStatus: req.body.CusPayStatus,
        CusPayDate: req.body.CusPayDate,
        ProviderPayStatus: req.body.ProviderPayStatus,
        ProviderPayDate: req.body.ProviderPayDate,
    }

    return validate(updateProductPaymentSchema(), attributes);
};

const deleteProductPayment = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deleteProductPaymentSchema(), attributes);

};

    module.exports = {
        getAllProductPayments,
        getProductPayment,
        setProductPayment,
        updateProductPayment,
        deleteProductPayment
    }