const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Credential', {
        id: {
            types: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ClientToden:{
          types: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        ClientSecret:{
            types: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    })
}