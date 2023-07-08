const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Historic Operation', {
        id: {
            types: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Status_Operation:{
            types: DataTypes.ARRAY,
            allowNull: true,
        },
    })
}