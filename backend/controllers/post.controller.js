const db = require('../models');
const token = require('../middleware/token')
const fs = require('fs');
require("dotenv").config({path: '../config/.env'});



exports.createPost = async (req, res) => { 
   
    const userId = token.getUserId;
    
    try {
        const user = await db.User.findOne({
            attributes: ["firstName", "lastName", "id"],
            where: { id: userId }
        })
        
        if (user !== null) {
            const post = await db.Post.create({
                include: [
                    {
                        model: db.User,
                        attributes: ["firstName", "lastName", "id"]
                    }
                ],
                title: req.body.title,
                content: req.body.content, 
                UserId: user.id
            })
            //console.log(title);
            //console.log(include);
            //console.log(content);
            console.log(UserId);
            res.status(200).json({ post: post, message: 'Votre message est publié !'});
        } else {
            res.status(400).json({ error: 'Impossible de publier votre message'})
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erreur server '})
    }    
};



exports.modifyPost = (req, res) => {

}

exports.deletePost = (req, res) => {

}

