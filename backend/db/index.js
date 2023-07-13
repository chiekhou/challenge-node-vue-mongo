const connection = require("../config/db.config");
const {Sequelize} = require('sequelize');
const fs = require("fs");
const path = require("path");

//Initialisation de sequelize avec notre base de données PostgreSql
const sequelize = new Sequelize(process.env.DATABASE_URL);

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
testDbConnection();
const db = {};

const files = fs.readdirSync(path.join(__dirname, "models"));
files.forEach((file) => {
    const model = require(path.join(__dirname, "models", file))(sequelize);
    db[model.name] = model;
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;

