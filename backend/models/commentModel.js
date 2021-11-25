const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {}
    Comment.init({
        comment: {
            type: Sequelize.DataTypes.STRING,
            AllowNull: false,
        },
    }, 
    {
        sequelize,
        modelName: "Comment"
    })
    return Comment
}