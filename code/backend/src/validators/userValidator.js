const validate = require('../utilities/validationHelper')

const {getAllUsersSchema,
    getUserSchema,
    setUserSchema,
    updateUserSchema,
    deleteUserSchema
} = require('../schema/userSchema');

const getAllUsers = async(req)=>{
    const attributes = {id:req.params.id}
    return validate(getAllUsersSchema(), attributes);
}

const getUser = async(req)=>{
    const attributes = {id:req.params.id}
    return validate(getUserSchema(), attributes);
}

const setUser = async(req)=>{
    const attributes = {
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    return validate(setUserSchema(), attributes);
}

module.exports = {
    getAllUsers,
    getUser,
    setUser
}