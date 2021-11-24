const Sequelize = require("sequelize"); 
const sequelize = require("../config/db");

const Comment = sequelize.define("comment", {
    comment: {
        type: Sequelize.DataTypes.STRING,
        AllowNull: false,
    },
})

module.exports = Comment;