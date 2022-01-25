var DataTypes = require("sequelize").DataTypes;
var _comment = require("./comment");
var _post = require("./post");
var _user = require("./user");
var _vote = require("./vote");

function initModels(sequelize) {
  var comment = _comment(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var vote = _vote(sequelize, DataTypes);


  return {
    comment,
    post,
    user,
    vote,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
