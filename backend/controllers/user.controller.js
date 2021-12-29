const db = require("../models/");

exports.getAllUsers = async (req, res) => {
    const users = await db.User.findAll();
    res.status(200).json(users);
}

exports.getOneUser = 