const { User} = require('../models/userModel');
const fs = require('fs');



//Trouver un user
exports.getOneUser = async (req, res, next) => {
    try {
        const user = await User.findOne({
          where: { id: req.params.id },
        });
        res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ error: "Erreur serveur" });
    }
};
    
//Trouver tous les users
exports.getAllUsers = async (req, res, next) => {
    User.findAll({attributes: ['id', 'email','firstName','lastName']}) 
    .then((users) => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
};

//Modifier le profil user
exports.modifyProfil = (req, res, next) => {
    const id = req.params.id;


};


// Admin Suppression compte 
exports.desactivateAccount = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({
            where: { id: id}
        });
        if(user.profilImage !== null) {
            const filename = user.profilImage.split('/images/')[1];
            fs.unlink(`image/${filename}`, () => {
                User.destroy({ where: { id: id } });
                res.status(200).json({ message: 'Compte supprimé' });
            });
        }else {
            User.destroy({ where: { id: id } });
            res.status(200).json({ message: 'compte supprimé' });
        }
    } catch (error) {
        return res.status(500).send({ error: 'Erreur serveur' });
    }
}

//Suppression compte
exports.desactivateMyAccount = (req, res, next) => {

}
