const Service = require("../models/service");

const getAllServices = async () => {
  
    // fetch list of products
    const service = await Service.findAll();
  
    return {
        service,
    };
  };

const getService = async (attributes) => {

    // fetch one event
    const service = await Service.findByPk(attributes.id);

    return {
        service
    };
};

const setService = async (attributes) => {

    // create one product
    const service = await Service.create({ 
            name: attributes.name, 
            description: attributes.description,
            price: attributes.price,
            category: attributes.category,
            comission: attributes.comission,
            image_path : attributes.image_path,
            discount : attributes.discount,
            timeSlots : attributes.timeSlots,
            userid : attributes.userid,
          }).then((res) => {
            console.log(`Insert successful: ${res._id}`);
            return {
                res
            };
          }).catch((err) => {
            console.log(`Error: ${err}`);
          });
        
    return {
        service
    };
};

const updateService = async (attributes) => {

    // update one product
    const service = await Service.update({ 
            name: attributes.name, 
            description: attributes.description,
            price: attributes.price,
            category: attributes.category,
            comission: attributes.comission,
            image_path : attributes.image_path,
            discount : attributes.discount,
            timeSlots : attributes.timeSlots,
            userid : attributes.userid,
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
        service
    };
};

const deleteService= async (attributes) => {

    // delete one product
    const service = await Service.destroy({
        where: { _id: attributes.id },
      });

    return {
        service

    };
};


module.exports = {
    getAllServices,
    getService,
    setService,
    updateService,
    deleteService
}