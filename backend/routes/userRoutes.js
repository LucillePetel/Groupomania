const router = require('express').Router();
const userCtrl = require("../controllers/userController");
const auth = require('../middleware/authMiddleware');


router.get("/users", userCtrl.getAllUsers);
router.get('/:id', userCtrl.getOneUser);
//router.put('/:id', auth, userCtrl.modifyProfil);
router.delete("/", auth, userCtrl.desactivateAccount);
//router.delete("/:id", auth, userCtrl.desactivateMyAccount);


module.exports = router;