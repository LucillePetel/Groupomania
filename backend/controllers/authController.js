const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const User = require('../models/userModel')


//Inscription
exports.signUp = (req, res, next) => {
    let lastName = req.body.lastName;
    let firstName = req.body.firstname;
    let email = req.body.email;
    let password = req.body.password;

    if (lastName == null || firstName == null || email == null || password == null) {
        res.status(400).json({ error : "Tous les champs doivent être remplis" })
    }


}

 