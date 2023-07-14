const {DataTypes, Model} = require('sequelize');
const Transaction = require("./transaction.model");

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
    HistoricTransaction.belongsTo(Transaction,{
        foreignKey: historicTransaction_id,
        sourcekey: id,
    })
}

module.exports = HistoricTransaction;