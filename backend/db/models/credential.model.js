const { DataTypes } = require('sequelize');

function Credential(sequelize) {
    return sequelize.define('Credential', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ClientToken: {
            type: DataTypes.STRING,
        },
        ClientSecret: {
            type: DataTypes.STRING,
        }
    });
}

module.exports = Credential;
