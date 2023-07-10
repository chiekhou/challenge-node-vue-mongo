const {DataTypes, Model} = require('sequelize');

function Merchant (sequelize){
    return  sequelize.define('Merchant', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: {
            type: DataTypes.STRING,
        },
        NomSociete: {
            type: DataTypes.STRING,
        },
        Email: {
            type: DataTypes.STRING,
        },
        PhoneNumber: {
            type: DataTypes.INTEGER,
        },
        SIRET: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        RIB: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Devise: {
            type: DataTypes.STRING,
            allowNull: false
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });
}

module.exports = Merchant;