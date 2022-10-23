const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const ProductPayment = db.define(
  'productPayment',
  {
    
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    productid: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
    }, 
    purchaseDate: {
      type: DataTypes.DATE(),
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT(3),
      allowNull: true,
    }, 
    commission: {
      type: DataTypes.FLOAT(3),
      allowNull: true,
    }, 
    CusPayStatus: {
      type: DataTypes.ENUM('Pending','Received'),
      allowNull: false,
    }, 
    CusPayDate: {
      type: DataTypes.DATE(),
      allowNull: true,
    },
    ProviderPayStatus: {
      type: DataTypes.ENUM('Pending', 'Paid'),
      allowNull: false,
    },
    ProviderPayDate: {
      type: DataTypes.DATE(),
      allowNull: true,
    }, 

  }
  ,{
    logging: false,
  }
);

ProductPayment.sync()

// Product.sync().then((res) => {
//   Product.create({ 
//     name: "Black Forest", 
//     description: "Black forest cake",
//     price : 1200,
//     category: "food",
//     comission : 50,
//     count: 20,
//     image_path:"https://i.ytimg.com/vi/PDxvTCFutc8/maxresdefault.jpg"

//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports= ProductPayment;