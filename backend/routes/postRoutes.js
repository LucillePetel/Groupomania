const router = require('express').Router();
const postCtrl = require("../controllers/postController");
const auth = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer-config")

// Post CRUD
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getOnePost);
router.post("/", auth, upload, postCtrl.createPost);
router.delete("/:id", auth, postCtrl.deleteOnePost);
router.put("/:id", auth, postCtrl.modifyPost);

//like 


module.exports = router;