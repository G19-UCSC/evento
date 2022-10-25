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
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    productid: {
      type: DataTypes.STRING(100),
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

ProductPayment.sync({force:true})

// ProductPayment.sync().then((res) => {
//   ProductPayment.create({ 
//     userid: "78177470-16c0-43f0-a759-1fe82faf7598", 
//     productid: "0c648705-fecf-4771-9e2f-33baee6e4821",
//     quantity : 1,
//     purchaseDate: Date(),
//     price : 5500,
//     commission: 1375,
//     CusPayStatus: "Pending",
//     CusPayDate: null,
//     ProviderPayStatus: "Pending",
//     ProviderPayDate: null,

//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   }).catch((err)=>{
//     console.log(err);
//   });
// });


module.exports= ProductPayment;