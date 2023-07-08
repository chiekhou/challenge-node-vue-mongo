const { connectDB } = require("./config/database");
const Sequelize = require("sequelize");

// Connection à la bdd
const sequelize = new Sequelize('database', 'pgUser', 'pgPassword',
    {
        host: 'localhost',
        dialect: 'postgres',
        dialecOptions: {
            timezone: 'Etc/GMT-2',
        },
        logging: false
    }
)

sequelize.authenticate()
    .then(_ => console.log('La connexion à la base de données a bien été connecté'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))

const exports = module.exports = {};
exports.sequelize = sequelize;