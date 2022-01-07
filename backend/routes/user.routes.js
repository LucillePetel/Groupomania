const router = require('express').Router();
const authCtrl = require("../controllers/auth.controller");
const userCtrl = require("../controllers/user.controller")
const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config')

// auth
router.post('/signup', authCtrl.signUp);


// user
router.get('/', userCtrl.getAllUsers);
router.get('/:id', auth, userCtrl.getOneUser);
router.put('/:id', auth, multer, userCtrl.modifyUser);
router.delete('/:id', auth, userCtrl.deleteProfil);


module.exports = router; 