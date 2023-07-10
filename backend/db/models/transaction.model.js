const {DataTypes, Model} = require('sequelize');

function Transaction(sequelize){
    return  sequelize.define('Transaction', {
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
}


module.exports = Transaction;
