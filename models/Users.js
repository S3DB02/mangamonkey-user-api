const Sequelize = require('sequelize');
const sequelize = require('../database.js');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image_link: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    theme: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},
{
    timestamps: false,
}
);

module.exports = User;
