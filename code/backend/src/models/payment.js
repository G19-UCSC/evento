const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const Payment = db.define(
  'payment',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT(3),
      allowNull: false,
    },
    PayStatus: {
      type: DataTypes.ENUM('Pending', 'Paid','Received'),
      allowNull: false,
    },
    PayDate: {
      type: DataTypes.DATE(),
      allowNull: true,
    },
    Type:{
      type: DataTypes.ENUM('Product', 'Service','Event'),
      allowNull: false,
    }
    
    
  }
  ,{
    logging: false,
  }
);

Payment.sync({force:true})

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


module.exports= Payment;