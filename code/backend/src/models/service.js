const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const Service = db.define(
  'service',
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
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT(3),
        allowNull: false,
      },
    category: {
      type: DataTypes.ENUM('venue', 'catering', 'decorations'),
      allowNull: false,
    },
    comission: {
      type: DataTypes.FLOAT(3),
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT(10),
      allowNull: false,
    },
    timeSlots: {
      type: DataTypes.ARRAY(DataTypes.DATE),
      allowNull: false,
    },
    userid: {
      type: DataTypes.STRING(),
      allowNull: false,
    }
  }
  ,{
    logging: false,
  }
);

Service.sync()

// Service.sync().then((res) => {
//   Service.create({ 
//     name: "Green Cabin", 
//     description: "Our team is so dedicated to working closely with you to create an unforgettable epicurean experience that will not only enhance your event, but also keep your guests talking about it for years to come.",
//     price : 80000,
//     category: "catering",
//     comission : 5,
//     discount: 10,
//     image_path:"https://static.wixstatic.com/media/ff1aeb_e238c8a19086419ea0933bb40a90a428~mv2.jpg/v1/fill/w_490,h_656,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff1aeb_e238c8a19086419ea0933bb40a90a428~mv2.jpg",
//     timeSlots:['2022-11-10', '2022-12-10'],
//     userid:"e1ee36fe-03d2-4b49-8159-8d6e06e1d20a"

//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });


module.exports= Service;