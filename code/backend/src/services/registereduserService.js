const User = require("../models/registereduser");

const getAllUsers = async()=>{
    const users = await User.findAll();
    return {
        users,
    };
};

const getUser = async(attributes)=>{
    const user = await User.findByPk(attributes.userid);
    return {
        user
    };
};

const setUser = async(attributes)=>{
    const user = await User.create({
        userid: attributes.userid,
        username: attributes.username,
        password: attributes.password,
        contact: attributes.contact,
        address: attributes.address,
        role: attributes.role,
        status: attributes.status,
        approvedAt: attributes.approvedAt},
        {
            returning: true,
            plain: true
    }).then((res)=>{
        console.log(`New user insert successful: ${res.userid}`);
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
        userid: attributes.userid,
        username: attributes.username,
        password: attributes.password,
        contact: attributes.contact,
        address: attributes.address,
        role: attributes.role,
        status: attributes.status,
        approvedAt: attributes.approvedAt
    },{
        where: { userid: attributes.userid },
        returning: true,
        plain: true
    }).then((res)=>{
        console.log(`Update successful: ${res.userid}`);
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
        where: { userid: attributes.userid },
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