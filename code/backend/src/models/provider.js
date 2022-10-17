const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const Provider = db.define(
  'provider',
  {
    userid: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    businessName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  }
  ,{
    logging: false,
  }
);

Provider.sync()
// Provider.sync().then((res) => {
//   Provider.create({
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


module.exports= Provider;