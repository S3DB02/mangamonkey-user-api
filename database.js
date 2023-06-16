const Sequelize = require('sequelize');

const sequelize = new Sequelize('mangamonkey', 'root', 'manga_root', {
    host: 'mangamonkey-db',
    port: 3306,
    dialect: "mysql",
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
