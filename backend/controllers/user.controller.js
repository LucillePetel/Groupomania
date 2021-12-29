const db = require("../models/");

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
    db.User.findOne( { where : {id:req.params.id}} )
        .then((user) => {
            lastname = req.body.lastname;
            firstname = req.body.firstname;
            email = req.body.email;
            imageprofil = req.body.imageprofil;
            jobtitle = req.body.jobtitle;
            bio = req.body.bio;
            db.User.update()
        .then(() => res.status(201).json({ message: 'Compte modifié !' }))
        .catch(error => res.status(402).json({ error }));
        })
        .catch(error => res.status(500).json({error}))

}