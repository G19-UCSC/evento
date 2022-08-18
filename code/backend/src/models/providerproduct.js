const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const ProviderProduct = db.define(
   
  'providerproduct',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
   
  }
  ,{
    logging: false,
  }
);

ProviderProduct.sync()


module.exports = ProviderProduct;

   