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
    maxPeople: {
      type: DataTypes.INTEGER(3),
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
    status: {
      type: DataTypes.ENUM('Pending', 'Approved','Rejected','Cancelled', 'Paid', 'Completed'),
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
//     title: "Birthday Party", 
//     start_date: "2023-01-11",
//     end_date: "2023-02-22",
//     location: "Colombo" ,
//     maxPeople:150,
//     userid:"78177470-16c0-43f0-a759-1fe82faf7598",
//     packageid:"p12",
//     status:"Approved",
//     serviceCharge:15,
//     price:100000,
//     advance:70000,
//     advanceStatus:"Received",
//     finalPay:30000,
//     finalPayStatus:"Pending",
//     finalPayDate:"2023-02-30"


//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports = Event;