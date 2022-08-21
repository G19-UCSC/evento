const Payment = require("../models/payment");

const getAllPayments = async () => {
  
    // fetch list of events
    const payments = await Payment.findAll();
  
    return {
        payments,
    };
  };

const getPayment= async (attributes) => {

    // fetch one event
    const payment = await Payment.findByPk(attributes.id);

    return {
        payment
    };
};

const setPayment = async (attributes) => {

    // create one event
    const payment = await Payment.create({ 
            userid: attributes.userid, 
            total: attributes.total,
            providerPayStatus: attributes.providerPayStatus,
            providerPayDate: attributes.providerPayDate

          }).then((res) => {
            console.log(`Insert successful: ${res._id}`);
            return {
                res
            };
          }).catch((err) => {
            console.log(`Error: ${err}`);
          });
        
    return {
        payment
    };
};

const updatePayment = async (attributes) => {

    // update one event
    const payment = await Payment.update({ 
        userid: attributes.userid, 
        total: attributes.total,
        providerPayStatus: attributes.providerPayStatus,
        providerPayDate: attributes.providerPayDate
          },{
            where: { _id: attributes.id },
            returning: true,
            plain: true
          }).then((res) => {
            console.log(`Update successful: ${res._id}`);
            return {
                res
            };
          }).catch((err) => {
            console.log(`Error: ${err}`);
          });
        
    return {
        payment
    };
};

const deletePayment = async (attributes) => {

    // delete one event
    const payment = await Payment.destroy({
        where: { _id: attributes.id },
      });

    return {
        payment
    };
};


module.exports = {
    getAllPayments,
    getPayment,
    setPayment,
    updatePayment,
    deletePayment
}