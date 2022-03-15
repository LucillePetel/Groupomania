const router = require('express').Router();
const postCtrl = require('../controllers/post.controller');
const voteCtrl = require('../controllers/vote.controller')
const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config')

//Post
router.get('/', auth, postCtrl.getAllPosts);
router.post('/', auth, postCtrl.createPost);
router.put('/:postId', auth, multer, postCtrl.modifyPost);
router.delete('/:postId', auth, postCtrl.deletePost);

//Like
router.post('/:postId/vote', auth, voteCtrl.votePost)

module.exports = router; 