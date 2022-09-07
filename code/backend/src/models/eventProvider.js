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
        allowNull: false,
    },
    providerpay_status: {
        type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected'),
        allowNull: false,
    },
    providerpay_date: {
        type: DataTypes.DATE(),
        allowNull: false,
    },
  }
  , {
    logging: false,
  }
);

EventProvider.sync()

module.exports = EventProvider;