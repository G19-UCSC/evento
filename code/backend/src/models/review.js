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

// REVIEW.sync().then((res) => {
//     REVIEW.create({ 
//   productid:"0c648705-fecf-4771-9e2f-33baee6e4821",
//     userid:"ee890a73-408d-4101-b494-38e7bb44aa53",
//    review:"Very Tasty Cake!",
//    rating:"2"
//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports = REVIEW;