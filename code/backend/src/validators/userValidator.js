const validate = require('../utilities/validationHelper')
const {
    getAllUsersSchema,
    getUserSchema,
    setUserSchema,
    updateUserSchema,
    deleteUserSchema
} = require('../schema/userSchema');

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
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    return validate(setUserSchema(), attributes);
};

const updateUser = async (req) => {
    const attributes = {
        userid:req.params.userid,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    return validate(updateUserSchema(), attributes);
};

const deleteUser = async (req) => {
    const attributes = {
        userid:req.params.userid
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