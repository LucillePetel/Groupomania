const router = require('express').Router();
const postCtrl = require('../controllers/post.controller');
const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config')

router.post('/', auth, postCtrl.createPost);
router.put('/:postId', auth, multer, postCtrl.modifyPost);
router.delete('/:postId', auth, postCtrl.deletePost); 

module.exports = router; 