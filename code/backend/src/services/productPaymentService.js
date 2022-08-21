const ProductPayment = require("../models/productPayment");

const setProductPayment = async (attributes) => {

    // create one event
    const productPayment = await ProductPayment.create({ 
            productid: attributes.productid, 
            paymentid: attributes.paymentid,
            count: attributes.count,

          }).then((res) => {
            console.log(`Insert successful: ${res._id}`);
            return {
                res
            };
          }).catch((err) => {
            console.log(`Error: ${err}`);
          });
        
    return {
        productPayment
    };
};

module.exports = {

    setProductPayment
    
}
