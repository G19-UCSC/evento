const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const ProductPayment = db.define(
  'productPayment',
  {
    
    productid: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    
    paymentid: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
    }, 
  }
  ,{
    logging: false,
  }
);

ProductPayment.sync({force:true})

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