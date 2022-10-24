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
        type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected'),
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

// EventProvider.sync()
EventProvider.sync().then((res) => {
  EventProvider.create({ 
    eventid: "ffe3a084-1bea-459b-b421-7f7c6753a6ae", 
    providerid: "b408382d-712c-4a6f-9c60-368f1d48b9f3",
    productid: "ace08e61-7aa7-4674-b8eb-61df8bf37f05",
    status: "Accepted" ,
    providerpay:20000,
    providerpay_status:"Pending",
    providerpay_date:"2023-01-30",
    


  }).then((res) => {
    console.log(`Insert successful: ${res._id}`);
  });
});

module.exports = EventProvider;