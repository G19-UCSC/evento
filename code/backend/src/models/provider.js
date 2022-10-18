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
//     userid:"b928dd43-fb9f-4103-9045-a9596e45325d", 
//     businessName: "Raj Bakers", 
//     location: "229,Palliyawatha,Hendala,Wattala",

//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports= Provider;