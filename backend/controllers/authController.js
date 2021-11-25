const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const passwordValidator = require('password-validator');
const User = require('../models/userModel')


const passwordSchema = new passwordValidator();

//Contraintes du mdp
passwordSchema
.is().min(8) //longueur min 8
.is().max(30) // longueur max 30
.has().uppercase() // presence de majuscule
.has().lowercase() // presence de minuscule
.has().digits(2) // 2 chiffres min
.has().not().spaces() // Pas d'espaces

//Inscription
exports.signUp = (req, res, next) => {
    let name = req.body.name;
    let firstName = req.body.firstname;
    let email = req.body.email;
    let password = req.body.password;

    if (name == null || firstName == null || email == null || password == null) {
        res.status(400).json({ error : "Tous les champs doivent être remplis" })
    }
}

 