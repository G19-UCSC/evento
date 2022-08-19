const validate = require('../utilities/validationHelper')
const {
    getAllUsersSchema,
    getUserSchema,
    setUserSchema,
    updateUserSchema,
    deleteUserSchema
} = require('../schema/registereduserSchema');

const getAllUsers = async(req)=>{
    const attributes = {userid:req.params.userid}
    return validate(getAllUsersSchema(), attributes);
}

const getUser = async(req)=>{
    const attributes = {userid:req.params.userid}
    return validate(getUserSchema(), attributes);
};

const setUser = async(req)=>{
    const attributes = {
        userid:req.body.userid,
        username: req.body.username,
        password: req.body.password,
        contact: req.body.contact,
        address: req.body.address,
        role: req.body.role,
        status: req.body.status,
        approvedAt: req.body.approvedAt
    }
    console.log(attributes)
    return validate(setUserSchema(), attributes);
};

const updateUser = async (req) => {
    const attributes = {
        userid:req.body.userid,
        username: req.body.username,
        password: req.body.password,
        contact: req.body.contact,
        address: req.body.address,
        role: req.body.role,
        status: req.body.status,
        approvedAt: req.body.approvedAt
    }
    return validate(updateUserSchema(), attributes);
};

const deleteUser = async (req) => {
    const attributes = {
        userid:req.params.id
    }
    return validate(deleteUserSchema(), attributes);
};

module.exports = {
    getAllUsers,
    getUser,
    setUser,
    updateUser,
    deleteUser
}