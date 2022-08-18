const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const User = db.define(
  'user',
  {
    _userid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
  }
  ,{
    logging: false,
  }
);

User.sync()

module.exports= User;