const router = require('express').Router();
const commentCtrl = require("../controllers/commentController");
const auth = require("../middlewares/authMiddleware");

//comment CRUD
router.get("/:id/comments", auth, commentCtrl.getAllComments);
router.get("/:id", auth, commentCtrl.getOneComment);
router.post("/:id", auth, commentCtrl.createComment);
router.delete("/:id", auth, commentCtrl.deleteOneComment);

module.exports = router;