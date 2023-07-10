const {DataTypes, Model} = require('sequelize');

function Operation (sequelize){
    return  sequelize.define('Operation', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Status:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        DateOperation:{
            type: DataTypes.DATE,
            allowNull: true,
        },
        TypeOperation:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
}

module.exports = Operation;