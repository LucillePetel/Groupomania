const router = require('express').Router();
const userCtrl = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");

router.get("/:id", auth, userCtrl.getOneUser);



module.exports = router;