const User = require('../models/userModel')




exports.getAllUsers = async (req, res, next) => {
    const users = await User.find().select('-passvord');
    res.status(200).json(users);
}