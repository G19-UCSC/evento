const { Sequelize } = require('sequelize');

const dotenv = require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT,10),
    dialect: 'postgres',
  },
  {
    logging: false
  },
);


module.exports = sequelize;