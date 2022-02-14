const db = require('../models/');
//const fs = require('fs');
require("dotenv").config();
const jwt = require('jsonwebtoken')



exports.getAllPosts = async (req, res) => {
    
    try {
        const posts = await db.Post.findAll(
            
            {
          attributes: ["id", "title", "content", "user_Id", "createdAt"],
          order: [["createdAt", "ASC"]],
          include: [
            {
              model: db.User,
              attributes: ["firstname", "lastname", "id"],
            },
          ],
        });
        res.status(200).json(posts);
        
      } catch (error) {
        return res.status(500).send({
          error: "Une erreur est survenu lors de la récupération des messages ",
        });
      }
}; 

exports.createPost = async (req, res) => { 
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
    const userId = decodedToken.userId;

    db.User.findOne({
        where: { id: userId }
    })
    
    .then(user => {
        if(user) {

            const post = db.Post.build({
                user_id: user.id,
                title: req.body.title,
                content: req.body.content,
                
            })

            post.save()
            .then(() => res.status(201).json({ message: 'Votre message a bien été créé !' }))
            .catch(error => res.status(400).json({ error: 'Impossible de publier votre message' }));
        } else {
            return res.status(404).json({ error: 'Utilisateur non trouvé' })
        }
    })
    .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));   

};



exports.modifyPost = (req, res) => {

    const postObject = req.file? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`
      } : { ...req.body }

      console.log(req.params.postId);

      db.Post.findOne({
        where: {  id: req.params.postId },
    })
    .then(findPost => {
        if(findPost) {
            db.Post.update(postObject, {
                where: { id: req.params.postId}
            })
            .then(post => res.status(200).json({ message: 'Votre message a bien été modifié !' }))
            .catch(error => res.status(400).json({ error: 'Une erreur s\'est produite !' }))
        }
        else {
            res.status(404).json({ error: 'Message non trouvé' });
        }
    })
    .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
      

}

exports.deletePost = (req, res) => {

    db.Post.findOne({
        attributes: ['id'],
        where: { id: req.params.postId }
    })
    .then(post => {
        if(post) {
                db.Post.destroy({ 
                    where: { id: req.params.postId } 
                })
                .then(() => res.status(200).json({ message: 'Votre message a été supprimé' }))
                .catch(() => res.status(500).json({ error: 'Ue erreur s\'est produite !' }));
            
        } else {
            return res.status(404).json({ error: 'Message non trouvé'})
        }
    })
    .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));

}

   
