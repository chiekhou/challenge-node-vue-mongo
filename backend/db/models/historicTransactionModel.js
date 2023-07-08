const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Historic-Transaction', {
        id: {
            types: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Status_Transacation:{
            types: DataTypes.ARRAY,
            allowNull: true,
        },
    })
}