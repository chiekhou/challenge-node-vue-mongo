const { DataTypes, Transaction} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Merchant', {
        id: {
            types: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name:{
            types: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        NomSociete: {
            types: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Email:{
          types: DataTypes.STRING,
            allowNull: false,
          unique: true,
        },
        PhoneNumber:{
          types: DataTypes.INTEGER,
          unique: true,
        },
        SIRET: {
            types: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        RIB:{
            types: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Devise:{
            types: DataTypes.STRING,
            allowNull: false
        },
        IsActive:{
            types: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    })
}
module.exports = Merchant;
