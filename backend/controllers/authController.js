const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const User = require('../models/userModel')


//Inscription
exports.signUp = (req, res, next) => {
    let email = req.body.email;
	let password = req.body.password;
	let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    //Verification de la présence de chaque champs
    if ( !lastName || !firstName || !email || !password) {
        return res.status(400).json({message:'Une ou plusieurs informations sont manquantes'})
    }

    const nameRegex = /(.*[a-z]){3,30}/;
    const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$'/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ 

    //Contrôle de la validité des champs
    if(nameRegex.test(lastName) && nameRegex.test(firstName) && emailRegex.test(email) && passwordRegex.test(password)) {
        //Hashage du password avec un salt de 10
        bcrypt.hash(password, 10)
            .then(hash => {
                const user = new User({
                    lastName: lastName,
                    firstName: firstName,
                    email: email,
                    password: hash
                });
                user.save()
            })
            .then((user) => {
                if (user) {
                    return res.status(201).json({ message:'Utilisateur créé !' })
                }
            })
            .catch((err) => {res.status(401).json({ err })});
    } else {
        res.status(400).json({ message: 'informations incorrectes' })
    }
}


//Connexion 

exports.login = (req, res, next) => {
    let email = req.body.email;
	let password = req.body.password;

    //Verification de la présence de chaque champs
    if ( !email || !password ) {
        return res.status(400).json({message:'Une ou plusieurs informations sont manquantes'})
    }

    User.findOne({
        where: {
            email: email
        }
        .then(user => {
            if (!user) {
                return res.status(401).json({ message:'l\'utilisateur n\'existe pas ! ' })
            }
            bcrypt.compare(password, user.password)
                .then (valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Le mot de passe est incorrecte !' })
                    }
                    res.status(200).json({
                        message: 'Connexion réussie',
                        userId: user.id,
                        token: jwt.sign( 
                            { userId: user.id }, 
                            process.env.JWT_TOKEN, 
                            { expiresIn: '24h' }
                        )
                    })
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }))
    })
}







 