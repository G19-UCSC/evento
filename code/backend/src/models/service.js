const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const Service = db.define(
  'service',
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
        type: DataTypes.FLOAT(3),
        allowNull: false,
      },
    category: {
      type: DataTypes.ENUM('clothing', 'food', 'decor'),
      allowNull: false,
    },
    comission: {
      type: DataTypes.FLOAT(3),
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT(10),
      allowNull: false,
    },
    timeSlots: {
      type: DataTypes.ARRAY(DataTypes.DATE),
      allowNull: false,
    },
    userid: {
      type: DataTypes.STRING(),
      allowNull: false,
    }
  }
  ,{
    logging: false,
  }
);

Service.sync()

// Service.sync().then((res) => {
//   Service.create({ 
//     name: "Wedding hall", 
//     description: "Wedding hall",
//     price : 40000,
//     category: "decor",
//     comission : 5000,
//     discount: 0,
//     image_path:"https://i.ytimg.com/vi/PDxvTCFutc8/maxresdefault.jpg",
//     timeSlots:['2022-10-10', '2022-11-10'],
//     userid:"87adfe52-d2b8-42cd-91ff-6c764e97e717"

//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports= Service;