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

REVIEW.sync({force:true})

// REVIEW.sync().then((res) => {
//     REVIEW.create({ 
//   productid:"9832b50d-1ac1-440d-8e09-2934ad448766",
//     userid:"1d6aefa6-cd84-40e8-af62-bd44f97e8a7d",
//    review:"Brightness is very low!",
//    rating:"2"
//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports = REVIEW;