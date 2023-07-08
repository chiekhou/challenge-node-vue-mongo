const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Transaction', {
        id: {
            types: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Devise: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        Status: {
            types: DataTypes.ARRAY,
            allowNull: false,
        },
        DateTransaction: {
            types: DataTypes.DATE,
            allowNull: false,
        },
        UserId: {}
    })
}

Transaction.hasOne(Merchant, {
    foreignKey: 'Merhcant_ID',
    as: 'Merchant'
});

Transaction.hasOne(User,{
    foreignKey:'user_id',
    as:'User'
});
