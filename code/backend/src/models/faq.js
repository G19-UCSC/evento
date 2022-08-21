const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const FAQ = db.define(
    'faq',
    {
        _id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        question: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING(600),
            allowNull: true,
        }
    }
    , {
        logging: false,
    }
);

FAQ.sync()




module.exports = FAQ;