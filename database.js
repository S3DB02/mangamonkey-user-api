const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
});

sequelize
    .query("select * from users")
    .then(() => {
        console.log("✅", "Database connection successful!\n");
    })
    .catch((err) => {
        if (err.original.sqlMessage === undefined) {
            console.error(
                "❌",
                "Unable to connect to the database."
            );
        } else {
            console.error(
                "Unable to connect to the database.",
                "\n" + err.original.sqlMessage
            );
        }
    });

module.exports = sequelize;
