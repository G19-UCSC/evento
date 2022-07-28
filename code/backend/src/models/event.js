const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const Event = db.define(
  'event',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM('Workshop', 'Meetup', 'YGC Senior' ,'YGC Junior'),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE(),
      allowNull: false,
    }
  }
  ,{
    logging: false,
  }
);

Event.sync()

// Event.sync().then((res) => {
//   Event.create({ 
//     title: "Create business website", 
//     location: "Jaffna",
//     category: "Workshop",
//     date: "2020-01-01" 
//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports= Event;