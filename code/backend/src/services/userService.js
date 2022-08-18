const User = require("../models/user");

const getAllUsers = async()=>{
    const users = await User.findAll();
    return {
        users,
    };
};

const getUser = async(attributes)=>{
    const user = await User.findByPk(attributes.id);
    return {
        user
    };
};

const setUser = async(attributes)=>{
    const user = await User.create({
        email: attributes.email,
        firstname: attributes.firstname,
        lastname: attributes.lastname
    }).then((res)=>{
        console.log(`New user insert successful: ${res._userid}`);
        return {
            res
        };
    }).catch((err)=>{
        console.log(`Error: ${err}`);
    });
    
    return {
        user
    };
};

const updateUser = async(attributes)=>{
    const user = await User.update({
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
        user
    };
};

const deleteUser = async(attributes) => {
    const user = await User.destroy({
        where: { _userid: attributes.userid },
    });

    return {
        user
    };
};

module.exports = {
    getAllUsers,
    getUser,
    setUser,
    updateUser,
    deleteUser
}