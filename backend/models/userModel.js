const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init({
        firstName: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            AllowNull: false,
            defaultValue: false,
        },
    }, 
    {
        sequelize,
        modelName: "User"
    })
    return User
}