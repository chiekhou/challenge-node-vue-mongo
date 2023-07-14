const {DataTypes, Model} = require('sequelize');
const {Operation} = require('./operation.model');

function Merchant (sequelize){
    return  sequelize.define('Merchant', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NomSociete: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password:{
          type:DataTypes.STRING,
            allowNull: false,
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
    Merchant.hasMany(Operation, {
        foreignKey: merchant_id,
        sourcekey: id
    });


}

module.exports = Merchant;