
const filterById = (Users,_userid) => {

return Users.filter(function(el){
    return el._userid===_userid;
});
}

module.exports = {  
    filterById
    
}
