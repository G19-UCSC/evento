const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const REVIEW = db.define(
    'review',
    {
        _id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        productid: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        userid: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        review: {
            type: DataTypes.STRING(600),
            allowNull: true,
        },
        rating: {
            type: DataTypes.INTEGER(30),
            allowNull: false,
        }
    }
    , {
        logging: false,
    }
);

REVIEW.sync()




module.exports = REVIEW;