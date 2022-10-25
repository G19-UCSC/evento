const validate = require('../utilities/validationHelper')
const {
    getAllProductsSchema,
    getProductSchema,
    setProductSchema,
    updateProductSchema,
    deleteProductSchema,
    getProductCategorySchema
} = require('../schema/productSchema');

const getAllProducts = async (req) => {

    const attributes = {id:req.params.id}
  
    return validate(getAllProductsSchema(), attributes);
  };
  
const getProduct = async (req) => {

    const attributes = {id:req.params.id}

    return validate(getProductSchema(), attributes);
};
const getProductCategory = async (req) => {

    const attributes = {category:req.params.category}

    return validate(getProductCategorySchema(), attributes);
};


const setProduct  = async (req) => {

    const attributes = {
        name: req.body.name, 
        description: req.body.description,
        price: req.body.price,
        discount: req.body.discount,
        category: req.body.category,
        comission: req.body.comission,
        count: req.body.count,
        image_path : req.body.image_path,
        userid : req.body.userid,
    }
    
    return validate(setProductSchema(), attributes);
    };

const updateProduct  = async (req) => {

    const attributes = {
        id :req.params.id,
        name: req.body.name, 
        description: req.body.description,
        price: req.body.price,
        discount: req.body.discount,
        category: req.body.category,
        comission: req.body.comission,
        count: req.body.count,
        image_path : req.body.image_path,
        userid : req.body.userid,
    }
    
    return validate(updateProductSchema(), attributes);
    };

const deleteProduct  = async (req) => {

    const attributes = {id:req.params.id}
    
    return validate(deleteProductSchema(), attributes);

};

module.exports = {
    getAllProducts,
    getProduct ,
    setProduct ,
    updateProduct,
    deleteProduct,
    getProductCategory
}