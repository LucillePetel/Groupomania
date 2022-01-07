const router = require('express').Router();
const authCtrl = require("../controllers/auth.controller");
const userCtrl = require("../controllers/user.controller")

// auth
router.post('/signup', authCtrl.signUp);


// user
router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getOneUser);
router.put('/:id', userCtrl.modifyUser);
router.delete('/:id', userCtrl.deleteProfil);


module.exports = router; 