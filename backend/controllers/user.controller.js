const db = require("../models/");
const jwt = require('jsonwebtoken');

require('dotenv').config({path: './config/.env'});



exports.getAllUsers = async (req, res) => {
    const users = await db.User.findAll();
    res.status(200).json(users);
};

exports.getOneUser = async (req, res) => {
    const id = req.params.id;
    db.User.findOne({
        attributes: [ `id`,`lastname`,`firstname`,`email` ],
        where: { id: id }
    })
    .then(user => {
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé' })
        }
    })
    .catch(error => res.status(404).json({ error: `Une erreur s\'est produite !` }));
};

exports.modifyUser = (req, res) => {

    
    req.body.user = userId

    const userObject = req.file ? {
        ...JSON.parse(req.body.user),
        image_profil: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
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

