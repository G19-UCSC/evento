const validate = require('../utilities/validationHelper')
const {
    getAllServicesSchema,
    getServiceSchema,
    setServiceSchema,
    updateServiceSchema,
    deleteServiceSchema
} = require('../schema/serviceSchema');

const getAllServices = async (req) => {

    const attributes = {id:req.params.id}
  
    return validate(getAllServicesSchema(), attributes);
  };
  
const getService = async (req) => {

    const attributes = {id:req.params.id}

    return validate(getServiceSchema(), attributes);
};

const setService  = async (req) => {

    const attributes = {
        name: req.body.name, 
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        comission: req.body.comission,
        image_path : req.body.image_path,
        discount : req.body.discount,
        timeSlots : req.body.timeSlots,
        userid : req.body.userid,
    }
    
    return validate(setServiceSchema(), attributes);
    };

const updateService  = async (req) => {

    const attributes = {
        id :req.params.id,
        name: req.body.name, 
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        comission: req.body.comission,
        image_path : req.body.image_path,
        discount : req.body.discount,
        timeSlots : req.body.timeSlots,
        userid : req.body.userid,
    }
    
    return validate(updateServiceSchema(), attributes);
    };

const deleteService  = async (req) => {

    const attributes = {id:req.params.id}
    
    return validate(deleteServiceSchema(), attributes);

};

module.exports = {
    getAllServices,
    getService ,
    setService ,
    updateService,
    deleteService 
}