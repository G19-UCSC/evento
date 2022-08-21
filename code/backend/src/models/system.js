const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const System = db.define(
  'system',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    contact_no: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    penalty_rate: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
    },
    service_rate: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
    },
    advance_rate: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
    },
  }
  , {
    logging: false,
  }
);

System.sync()

module.exports = System;