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
        email: attributes.email,
        firstname: attributes.firstname,
        lastname: attributes.lastname
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
        email: attributes.email,
        firstname: attributes.firstname,
        lastname: attributes.lastname
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