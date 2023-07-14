const { DataTypes } = require('sequelize');
const { Merchant } = require('./merchant.model');
const { User } = require('./user.model');

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
    Credential.belongsTo(Merchant,{
        foreignKey: credential_id,
        sourcekey: id,
    });

    Credential.belongsTo(User,{
        foreignKey: credential_id,
        sourcekey: id,
    });

}

module.exports = Credential;
