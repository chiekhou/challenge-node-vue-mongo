const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'pgUser', 'pgPassword', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;