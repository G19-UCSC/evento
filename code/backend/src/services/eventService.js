const Event = require("../models/event");

const getAllEvents = async () => {
  
    // fetch list of events
    const events = await Event.findAll();
  
    return {
      events,
    };
  };

const getEvent = async (attributes) => {

    // fetch one event
    const event = await Event.findByPk(attributes.id);

    return {
        event
    };
};

const setEvent = async (attributes) => {

    // create one event
    const event = await Event.create({ 
            title: attributes.title, 
            location: attributes.location,
            category: attributes.category,
            date: attributes.date 
          }).then((res) => {
            console.log(`Insert successful: ${res._id}`);
            return {
                res
            };
          }).catch((err) => {
            console.log(`Error: ${err}`);
          });
        
    return {
        event
    };
};

const updateEvent = async (attributes) => {

    // update one event
    const event = await Event.update({ 
            title: attributes.title, 
            location: attributes.location,
            category: attributes.category,
            date: attributes.date 
          },{
            where: { _id: attributes.id },
            returning: true,
            plain: true
          }).then((res) => {
            console.log(`Update successful: ${res._id}`);
            return {
                res
            };
          }).catch((err) => {
            console.log(`Error: ${err}`);
          });
        
    return {
        event
    };
};

const deleteEvent = async (attributes) => {

    // delete one event
    const event = await Event.destroy({
        where: { _id: attributes.id },
      });

    return {
        event
    };
};


module.exports = {
    getAllEvents,
    getEvent,
    setEvent,
    updateEvent,
    deleteEvent
}