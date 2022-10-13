const validate = require('../utilities/validationHelper')
const {
    getAllPaymentsSchema,
    getPaymentSchema,
    setPaymentSchema,
    updatePaymentSchema,
    deletePaymentSchema
} = require('../schema/paymentSchema');

const getAllPayments = async (req) => {

    const attributes = {id:req.params.id}
  
    return validate(getAllPaymentsSchema(), attributes);
  };
  
const getPayment = async (req) => {

    const attributes = {id:req.params.id}

    return validate(getPaymentSchema(), attributes);
};

const setPayment = async (req) => {

    const attributes = {
        userid: req.body.userid, 
        total: req.body.total,
        providerPayStatus: req.body.providerPayStatus,
        providerPayDate: req.body.providerPayDate  
    }
    
    return validate(setPaymentSchema(), attributes);
    };

const updatePayment = async (req) => {

    const attributes = {
        id:req.params.id,
        userid: req.body.userid, 
        total: req.body.total,
        providerPayStatus: req.body.providerPayStatus,
        providerPayDate: req.body.providerPayDate
    }
    
    return validate(updatePaymentSchema(), attributes);
    };

const deletePayment = async (req) => {

    const attributes = {id:req.params.id}
    
    return validate(deletePaymentSchema(), attributes);

};

module.exports = {
    getAllPayments,
    getPayment,
    setPayment,
    updatePayment,
    deletePayment
}