const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const RegisteredUser = db.define(
  'ruser',
  {
    userid: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('Customer','CorpCustomer','Provider','Staff','Admin'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending','Approved','Blocked'),
      allowNull: false,
    },
    approvedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
    }
  }
  ,{
    logging: false,
  }
);

RegisteredUser.sync()

module.exports= RegisteredUser;