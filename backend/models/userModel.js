const Sequelize = require("sequelize"); 
const sequelize = require("../config/db");

const User = sequelize.define("user", {
    firstName: {
        type: Sequelize.DataTypes.STRING,
        AllowNull: false,
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        AllowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        AllowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        AllowNull: false,
    },
    admin: {
        type: Sequelize.DataTypes.BOOLEAN,
        AllowNull: false,
        defaultValue: false,
    },
})

module.exports = User;