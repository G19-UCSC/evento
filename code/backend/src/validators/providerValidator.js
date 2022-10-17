const validate = require('../utilities/validationHelper')
const {
    getAllProvidersSchema,
    getProviderSchema,
    setProviderSchema,
    updateProviderSchema,
    deleteProviderSchema
} = require('../schema/providerSchema');

const getAllProviders = async(req)=>{
    const attributes = {userid:req.params.userid}
    return validate(getAllProvidersSchema(), attributes);
}

const getProvider = async(req)=>{
    const attributes = {userid:req.params.userid}
    return validate(getProviderSchema(), attributes);
};

const setProvider = async(req)=>{
    const attributes = {
        businessName: req.body.businessName,
        location: req.body.location
    }
    return validate(setProviderSchema(), attributes);
};

const updateProvider = async (req) => {
    const attributes = {
        userid:req.params.userid,
        businessName: req.body.businessName,
        location: req.body.location
    }
    return validate(updateProviderSchema(), attributes);
};

const deleteProvider = async (req) => {
    const attributes = {
        userid:req.params.userid
    }
    return validate(deleteProviderSchema(), attributes);
};

module.exports = {
    getAllProviders,
    getProvider,
    setProvider,
    updateProvider,
    deleteProvider
}