const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const EventProvider = db.define(
  'eventProvider',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    eventid: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    providerid: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    productid: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected','Cancelled'),
        allowNull: false,
    },
    providerpay: {
        type: DataTypes.FLOAT(3),
        allowNull: true,
    },
    providerpay_status: {
        type: DataTypes.ENUM('Pending', 'Paid'),
        allowNull: false,
    },
    providerpay_date: {
        type: DataTypes.DATE(),
        allowNull: true,
    },
  }
  , {
    logging: false,
  }
);

EventProvider.sync()

// EventProvider.sync().then((res) => {
//   EventProvider.create({ 
//     eventid: "3b23111c-abd9-4253-886f-a7a5db3df534",
//     providerid: "b928dd43-fb9f-4103-9045-a9596e45325d",
//   productid:"0c648705-fecf-4771-9e2f-33baee6e4821",
//    status:"Rejected",
//    providerpay:null,
//    providerpay_status: "Pending",
//    providerpay_date: null,
//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports = EventProvider;