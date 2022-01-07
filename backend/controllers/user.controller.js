const db = require("../models/");
const jwt = require('jsonwebtoken');

require('dotenv').config({path: './config/.env'});




exports.getAllUsers = async (req, res) => {
    const users = await db.User.findAll();
    res.status(200).json(users);
};

exports.getOneUser = (req, res) => {
    db.User.findOne( { where : {id:req.params.id}} )
        .then((user) => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};

exports.modifyUser = (req, res) => {
    console.log(req.headers);
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
    const userId = decodedToken.userId;
    
    

    req.body.user = userId

    const userObject = req.file ? {
        ...JSON.parse(req.body.user),
        imageProfil: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body}; 

    db.User.findOne({ where: { id: userId } })
    .then(findUser => {
        if (findUser) {
            db.User.update(userObject, { where: { id: userId } })
            .then(user => res.status(200).json({ message: 'Votre profil a bien été modifié !' }))
            .catch(error => res.status(400).json({ error: 'Une erreur s\'est produite !' }))
        }
        else {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
    })
    .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
};


exports.deleteProfil = (req, res) => {
    const id = req.params.id;

    db.User.findOne({ attributes : ['id'], where: { id: id } })
    .then(user => {
        if (user) {
            db.User.destroy({ where: { id: id } })
            .then(() => res.status(200).json({message: 'Compte supprimé'}))
            .catch(() => res.status(401).json({error: 'Une erreur s\'est produite'}))
        }
    })
    .catch(error => res.status(404).json({ error: 'Une erreur s\'est produite' }));
}

/*exports.modifyUser = (req, res, next) => { 
    db.User.findOne({ where: { id: req.params.id }})
        .then((user) =>{
            lastname = req.body.lastname;
            firstname = req.body.firstname;
            email = req.body.email;
            imageprofil = req.body.imageprofil;
            jobtitle = req.body.jobtitle;
            bio = req.body.bio;
            db.User.update()
        .then(() => res.status(201).json({ message: 'Compte modifié !' }))
        .catch(error => res.status(403).json({ error }));
        })
        .catch(error => res.status(500).json({error}))
}*/