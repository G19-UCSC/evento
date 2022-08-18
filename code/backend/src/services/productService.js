const Product = require("../models/product");

const getAllProducts = async () => {
  
    // fetch list of products
    const products = await Product.findAll();
  
    return {
      products,
    };
  };

const getProduct = async (attributes) => {

    // fetch one event
    const product = await Product.findByPk(attributes.id);

    return {
        product
    };
};

const setProduct = async (attributes) => {

    // create one product
    const product = await Product.create({ 
            name: attributes.name, 
            description: attributes.description,
            price: attributes.price,
            category: attributes.category,
            comission: attributes.comission,
            status: attributes.status 
          }).then((res) => {
            console.log(`Insert successful: ${res._id}`);
            return {
                res
            };
          }).catch((err) => {
            console.log(`Error: ${err}`);
          });
        
    return {
        product
    };
};

const updateProduct = async (attributes) => {

    // update one product
    const product = await Product.update({ 
            name: attributes.name, 
            description: attributes.description,
            price: attributes.price,
            category: attributes.category,
            comission: attributes.comission,
            status: attributes.status 
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
        product
    };
};

const deleteEvent = async (attributes) => {

    // delete one product
    const product = await Product.destroy({
        where: { _id: attributes.id },
      });

    return {
        product
    };
};


module.exports = {
    getAllProducts,
    getProduct,
    setProduct,
    updateProduct,
    deleteEvent
}