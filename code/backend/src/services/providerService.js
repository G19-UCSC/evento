const Provider = require("../models/provider");

const getAllProviders = async()=>{
    const providers = await Provider.findAll();
    return {
        providers,
    };
};

const getProvider = async(attributes)=>{
    const provider = await Provider.findByPk(attributes.userid);
    return {
        provider
    };
};

const setProvider = async(attributes)=>{
    const provider = await Provider.create({
        userid: attributes.userid,
        businessName: attributes.businessName,
        location: attributes.location
    }).then((res)=>{
        console.log(`New provider insert successful: ${res._userid}`);
        return {
            res
        };
    }).catch((err)=>{
        console.log(`Error: ${err}`);
    });
    
    return {
        provider
    };
};

const updateProvider = async(attributes)=>{
    const provider = await Provider.update({
        businessName: attributes.businessName,
        location: attributes.location
    },{
        where: { _userid: attributes.userid },
        returning: true,
        plain: true
    }).then((res)=>{
        console.log(`Update successful: ${res._userid}`);
        return {
            res
        };
    }).catch((err)=>{
        console.log(`Error: ${err}`);
    });

    return {
        provider
    };
};

const deleteProvider = async(attributes) => {
    const provider = await Provider.destroy({
        where: { _userid: attributes.userid },
    });

    return {
        provider
    };
};

module.exports = {
    getAllProviders,
    getProvider,
    setProvider,
    updateProvider,
    deleteProvider
}