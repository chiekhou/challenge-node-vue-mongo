const {DataTypes, Model} = require('sequelize');
const {Credential } = require('./credential.model');

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
        },
        Email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        IsAdmin:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });

    User.belongsTo(Credential, {
        foreignKey: credential_id,
        sourcekey: id,
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
