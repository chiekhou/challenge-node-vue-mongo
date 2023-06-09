module.exports = {
    HOST: 'localhost',
    USER:'pgUser',
    PASSWORD: 'pgPassword',
    DB: 'database',
    dialect: 'postgres',
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
};