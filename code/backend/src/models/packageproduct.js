const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const Packageproduct = db.define(
  'packageproduct',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    packageid: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    productid: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }
  , {
    logging: false,
  }
);

Packageproduct.sync()

module.exports = Packageproduct;