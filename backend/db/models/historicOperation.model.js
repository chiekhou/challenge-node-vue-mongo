const {DataTypes, Model} = require('sequelize');
const { Operation } = require('./operation.model')

function HistoricOperation(sequelize) {
    return sequelize.define('HistoricOperation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Status_Operation: {
            type: DataTypes.INTEGER,
        },
    });
    HistoricOperation.belongsTo(Operation, {
        foreignKey: historicOPeration_id,
        sourcekey: id,
    });
}

module.exports = HistoricOperation;
