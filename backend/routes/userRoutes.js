const router = require('express').Router();
const userCtrl = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");


router.get("/", userCtrl.getAllUsers);
router.get('/:id', userCtrl.getOneUser);
router.delete("/deleteAccount/:id", auth, userCtrl.desactivateAccount);



module.exports = router;