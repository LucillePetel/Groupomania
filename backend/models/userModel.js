const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init({
        firstName: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        jobTiltle: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        profilImage: {
            type: DataTypes.STRING,
            AllowNull: true,
        },
        bio: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            AllowNull: false,
            unique: true,
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