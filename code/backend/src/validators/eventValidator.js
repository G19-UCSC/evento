const validate = require('../utilities/validationHelper')
const {
    getAllEeventsSchema,
    getEventSchema,
    setEventSchema,
    updateEventSchema,
    deleteEventSchema
} = require('../schema/eventSchema');

const getAllEvents = async (req) => {

    const attributes = {id:req.params.id}
  
    return validate(getAllEeventsSchema(), attributes);
  };
  
const getEvent = async (req) => {

    const attributes = {id:req.params.id}

    return validate(getEventSchema(), attributes);
};

const setEvent = async (req) => {

    const attributes = {
        title: req.body.title, 
        location: req.body.location,
        category: req.body.category,
        date: req.body.date 
    }
    
    return validate(setEventSchema(), attributes);
    };

const updateEvent = async (req) => {

    const attributes = {
        id:req.params.id,
        title: req.body.title, 
        location: req.body.location,
        category: req.body.category,
        date: req.body.date 
    }
    
    return validate(updateEventSchema(), attributes);
    };

const deleteEvent = async (req) => {

    const attributes = {id:req.params.id}
    
    return validate(deleteEventSchema(), attributes);

};

module.exports = {
    getAllEvents,
    getEvent,
    setEvent,
    updateEvent,
    deleteEvent
}