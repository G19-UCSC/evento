const validate = require('../utilities/validationHelper')
const {
    setProductPaymentSchema,
    
} = require('../schema/productPaymentSchema');

const setProductPayment = async (req) => {

    const attributes = {
        productid: req.body.productid, 
        paymentid: req.body.paymentid,
        count: req.body.count
    }
    
    return validate(setProductPaymentSchema(), attributes);
    };

    module.exports = {
        setProductPayment
    }