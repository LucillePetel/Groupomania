const { User} = require('../models/userModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');




//Trouver un user
exports.getOneUser = async (req, res, next) => {
    try {
        const user = await db.User.findOne({
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
}

//Modifier le profil user
exports.modifyProfil = (req, res, next) => {

}

/*exports.desactivateAccount = (req, res, next) => {

}*/

