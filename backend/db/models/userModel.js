const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('User',{
        id:{
            types: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        LastName:{
            types: DataTypes.STRING,
            allowNull: false,
        },
        FirstName:{
            types: DataTypes.STRING,
            allowNull: false,
        },
        PhoneNumber:{
            types: DataTypes.NUMBER,
            allowNull: false,
        },
        Email:{
          types: DataTypes.STRING,
          allowNull: false,
        },
        Password:{
          types: DataTypes.STRING,
          allowNull: true,
        },
        Address:{
            types: DataTypes.STRING,
            allowNull: false,
        },
        ZipCode:{
            types: DataTypes.NUMBER,
            allowNull: false,
        },
        City:{
            types: DataTypes.STRING,
            allowNull: false,
        },
        Country:{
            types: DataTypes.STRING,
            allowNull: false,
        },
        CardNumber:{
            types: DataTypes.NUMBER,
            allowNull: false,
        },
        Cvc:{
            types: DataTypes.STRING,
            allowNull: false,
        },
        Devise:{
            types: DataTypes.STRING,
        },
        IsAdmin:{
            types: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    })
}


// const userSchema = mongoose.Schema({
//         name: {
//             type: String,
//             required: true
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true
//         },
//         password: {
//             type: String,
//             required: true
//         },
//         isAdmin: {
//             type: Boolean,
//             required: true,
//             default: false,
//         },
//     },
//     {
//         timestamps: true,
//         default: Date.now
//     }
// );

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = {User}