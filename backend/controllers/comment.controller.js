const jwt = require("jsonwebtoken");
const db = require('../models');


exports.createComment = async (req, res) => {

  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
  const userId = decodedToken.userId;
  
  db.Post.findOne({
      where: { id: req.params.postId }
  })
  .then(post => {
      if(post) {
          const comment = db.Comment.build({
              post_id: post.id,
              user_id: userId,
              text: req.body.text
          })
          comment.save()
              .then(() => res.status(201).json({ message: 'Votre commentaire a bien été créé !' }))
              .catch(error => res.status(400).json({ error: 'Une erreur s\'est produite !' }));
      } else {
          return res.status(404).json({ error: 'Message non trouvé'})
      }
  })
  .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
}


exports.deleteComment = (req, res) => {

  db.Comment.findOne({
    attributes: ['id'],
    where: { id: req.params.commentId }
})
.then(comment => {
    if(comment) {
            db.Comment.destroy({ 
                where: { id: req.params.commentId } 
            })
            .then(() => res.status(200).json({ message: 'Votre message a été supprimé' }))
            .catch(() => res.status(500).json({ error: 'Ue erreur s\'est produite !' }));
        
    } else {
        return res.status(404).json({ error: 'Message non trouvé'})
    }
})
.catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));

    
}