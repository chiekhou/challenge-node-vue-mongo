const {DataTypes, Model} = require('sequelize');

function HistoricTransaction(sequelize){
    return  sequelize.define('HistoricTransaction', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Status_Transaction:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
}

module.exports = HistoricTransaction;