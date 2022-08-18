const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const Product = db.define(
  'product',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
        type: DataTypes.NUMBER(100),
        allowNull: false,
      },
    category: {
      type: DataTypes.ENUM('clothing', 'food', 'decor'),
      allowNull: false,
    },
    comission: {
      type: DataTypes.NUMBER(),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(),
      allowNull: false,
    }
  }
  ,{
    logging: false,
  }
);

Product.sync()

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


module.exports= Product;