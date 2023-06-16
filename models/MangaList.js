const Sequelize = require('sequelize');
const sequelize = require('../database.js');

const MangaList = sequelize.define('mangalist', {
    user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    manga_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    current_chapter: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false,
    }
);

module.exports = MangaList;
