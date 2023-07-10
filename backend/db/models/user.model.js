const {DataTypes, Model} = require('sequelize');

function User(sequelize){
    return  sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        LastName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        FirstName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        PhoneNumber:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        ZipCode:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        City:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Country:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        CardNumber:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Cvc:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Devise:{
            type: DataTypes.STRING,
        },
        IsAdmin:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });
}


module.exports = User;


// module.exports = { User }


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

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
// });
//
// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// }
//
// const User = mongoose.model('User', userSchema);
