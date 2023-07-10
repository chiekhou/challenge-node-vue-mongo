// const { connectDB } = require("../config/db.config");
//
// const Sequelize = require("sequelize");
// const { Pool } = require('pg');
//
// const pool = new Pool({
//     host: 'localhost',
//     port: 5432,
//     user: 'pgUser',
//     password: 'pgPassword',
//     database: 'database'
// });
//
// const db = {
//     pool
// };
//
// module.exports = db;

// const { connectDB } = require("../config/db.config");
//
// const Sequelize = require("sequelize");
// const {Pool} = require('pg');
//
// const pool = new Pool({
//     host: 'localhost',
//     port: 5432,
//     user:'pgUser',
//     password:'pgPassword',
//     database: 'database'
// })
//
// connectDB.sequelize.authenticate()
//     .then(_ => console.log('La connexion à la base de données a bien été connecté'))
//     .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))
//
// // const exports = module.exports = {};
// exports.pool = pool;
// exports.sequelize = Sequelize;