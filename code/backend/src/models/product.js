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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    discount: {
      type: DataTypes.INTEGER,
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
    count: {
      type: DataTypes.INTEGER(30),
      allowNull: true,
    },
    image_path: {
      type: DataTypes.STRING(),
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

Product.sync()

// Product.sync().then((res) => {
//   Product.create({ 

//     name: "130ft Led", 
//     description: "Lights Keepsmile APP Control Music Sync Color Changing ",
//     discount: 4,
//     price : 1200,
//     category: "food",
//     comission : 50,
//     count: 20,
//     image_path:"https://m.media-amazon.com/images/I/81f9ShZY6nL._AC_SL1500_.jpg"


//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports= Product;