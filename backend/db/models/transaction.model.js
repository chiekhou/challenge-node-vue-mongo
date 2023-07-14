const {DataTypes, Model} = require('sequelize');
const {HistoricTransaction} = require('./historicTransaction.model')
const {Operation} = require('./operation.model')

function Transaction(sequelize) {
    return sequelize.define('Transaction', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Devise: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        DateTransaction: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
    Transaction.hasOne(HistoricTransaction,{
        foreignKey: transaction_id,
        sourceKey: id,
    })

    Transaction.belongsTo(Operation,{
        foreignKey: transaction_id,
        sourceKey: id,
    })
}


module.exports = Transaction;


