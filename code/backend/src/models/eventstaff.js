const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const Eventstaff = db.define(
    'eventstaff',
    {
        _id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        eventid: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        userid: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('Assigned', 'Removed'),
            allowNull: false,
        }
        // assignedOn: {
        //     type: DataTypes.DATE(),
        //     allowNull: false,
        // },
        // updatedOn: {
        //     type: DataTypes.DATE(),
        //     allowNull: true,
        // },
    }
    , {
        logging: false,
    }
);

Eventstaff.sync()

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


module.exports = Eventstaff;