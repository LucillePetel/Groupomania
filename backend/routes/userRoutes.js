const router = require('express').Router();
const userCtrl = require("../controllers/userController");
const auth = require('../middleware/authMiddleware');


router.get("/", userCtrl.getAllUsers);
router.get('/:id', userCtrl.getOneUser);
//router.put('/:id', auth, userCtrl.modifyProfil);
//router.delete("/deleteAccount/:id", auth, userCtrl.desactivateAccount);



module.exports = router;