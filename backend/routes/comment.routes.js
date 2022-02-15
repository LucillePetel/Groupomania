const router = require('express').Router();
const commentCtrl = require('../controllers/comment.controller');
const auth = require('../middleware/auth.middleware');


router.post('/:postId', auth, commentCtrl.createComment);
router.delete('/:commentId', auth, commentCtrl.deleteComment);

module.exports = router;