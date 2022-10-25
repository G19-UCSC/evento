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
        userid: req.params.userid,
        productid: req.params.productid,
        quantity: req.params.quantity,
        purchaseDate: req.params.purchaseDate,
        price: req.params.price,
        commission: req.params.commission,
        CusPayStatus: req.params.CusPayStatus,
        CusPayDate: req.params.CusPayDate,
        ProviderPayStatus: req.params.ProviderPayStatus,
        ProviderPayDate: req.params.ProviderPayDate,
    }

    return validate(setProductPaymentSchema(), attributes);
};

const updateProductPayment= async (req) => {

    const attributes = {
        id: req.params.id,
        userid: req.params.userid,
        productid: req.params.productid,
        quantity: req.params.quantity,
        purchaseDate: req.params.purchaseDate,
        price: req.params.price,
        commission: req.params.commission,
        CusPayStatus: req.params.CusPayStatus,
        CusPayDate: req.params.CusPayDate,
        ProviderPayStatus: req.params.ProviderPayStatus,
        ProviderPayDate: req.params.ProviderPayDate,
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