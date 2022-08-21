const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const Package = db.define(
  'package',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    createdBy: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    price: {
      type: DataTypes.FLOAT(3),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM('Standard', 'Corporate', 'Customized'),
      allowNull: false,
    }
  }
  , {
    logging: false,
  }
);

Package.sync()

module.exports = Package;