const Sequelize = require("sequelize"); 
const sequelize = require("../config/db");

const Post = sequelize.define("post", {
    title: {
        type: Sequelize.DataTypes.STRING,
        AllowNull: false,
    },
    content: {
        type: Sequelize.DataTypes.STRING,
        AllowNull: false,
    },
})

module.exports = Post;