const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const passwordValidator = require('password-validator');

require('dotenv').config(); 

const passwordSchema = new passwordValidator();

//Contraintes du mdp
passwordSchema
.is().min(8) //longueur min 8
.is().max(30) // longueur max 30
.has().uppercase() // presence de majuscule
.has().lowercase() // presence de minuscule
.has().digits(2) // 2 chiffres min
.has().not().spaces() // Pas d'espaces


exports.signUp = (req, res)

 