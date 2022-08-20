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
    start_date: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    userid: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    packageid: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    created_date: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Approved', 'Paied', 'Completed'),
      allowNull: false,
    },
    serviceCharge: {
      type: DataTypes.FLOAT(3),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(3),
      allowNull: false,
    },
    advance: {
      type: DataTypes.FLOAT(3),
      allowNull: true,
    },
    advanceStatus: {
      type: DataTypes.ENUM('Pending', 'Received'),
      allowNull: false,
    },
    advanceDate: {
      type: DataTypes.DATE(),
      allowNull: true,
    },
    finalPay: {
      type: DataTypes.FLOAT(3),
      allowNull: true,
    },
    finalPayStatus: {
      type: DataTypes.ENUM('Pending', 'Received'),
      allowNull: false,
    },
    finalPayDate: {
      type: DataTypes.DATE(),
      allowNull: true,
    }
  }
  , {
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


module.exports = Event;