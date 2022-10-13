const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const RegisteredUser = db.define(
  'ruser',
  {
    userid: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('Customer','CorpCustomer','Provider','Staff','Admin'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending','Approved','Blocked'),
      allowNull: false,
    },
    approvedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
    }
  }
  ,{
    logging: false,
  }
);

RegisteredUser.sync()
// RegisteredUser.sync().then((res) => {
//   RegisteredUser.create({
//     userid:"87adfe52-d2b8-42cd-91ff-6c764e97e717", 
//     username: "Vinothini", 
//     password: "12345",
//     contact : "0771234567",
//     address: "Station road, kodikaamam",
//     role : "Customer",
//     status : "Approved",
//     approvedAt : "2022-09-08"

//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports= RegisteredUser;