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
//     userid:"b408382d-712c-4a6f-9c60-368f1d48b9f3", 
//     businessName: "Everest Bakers", 
//     location: "Nelliady, Jaffna",

//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports= Provider;