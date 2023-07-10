    const {DataTypes, Model} = require('sequelize');

    function HistoricOperation(sequelize){
        return  sequelize.define('HistoricOperation', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            Status_Operation:{
                type: DataTypes.INTEGER,
            },
        });
    }

    module.exports = HistoricOperation;
