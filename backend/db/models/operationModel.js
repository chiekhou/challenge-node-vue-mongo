const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('Operation',{
        id:{
            types: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        Status:{
            types: DataTypes.ARRAY,
            allowNull: false,
        },
        DateOperation:{
            types: DataTypes.DATE,
            allowNull: true,
        },
        TypeOperation:{
            types: DataTypes.ARRAY,
            allowNull: true,
        }
    })
}