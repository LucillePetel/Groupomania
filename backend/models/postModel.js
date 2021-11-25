const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {}
    Post.init({
        title: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
    }, 
    {
        sequelize,
        modelName: "Post"
    })
    return Post
}