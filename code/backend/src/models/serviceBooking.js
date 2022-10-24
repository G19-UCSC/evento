const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const ServiceBooking = db.define(
  'serviceBooking',
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
    
    timeslot: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    Status: {
      type: DataTypes.ENUM('Pending','Accepted','Paid'),
      allowNull: false,
    }, 
    cancelledOn: {
      type: DataTypes.DATE(),
      allowNull: true,
    },
    cancelledBy: {
      type: DataTypes.STRING(100),
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
    commission: {
      type: DataTypes.FLOAT(3),
      allowNull: true,
    }, 
  }
  ,{
    logging: false,
  }
);

ServiceBooking.sync({force:true})

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


module.exports= ServiceBooking;