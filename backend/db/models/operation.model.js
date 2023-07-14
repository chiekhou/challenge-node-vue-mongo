const {DataTypes, Model} = require('sequelize');
const { HistoricOperation } = require('./historicOperation.model')
const { Transaction } = require('./transaction.model')

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
    Operation.hasOne(HistoricOperation, {
        foreignKey: operation_id,
        sourcekey: id,
    });

    Operation.belongsTo(Merchant,{
        foreignKey: operation_id,
        sourcekey: id,
    });

    Operation.hasOne(Transaction,{
        foreignKey: operation_id,
        sourcekey: id,
    })
}

module.exports = Operation;