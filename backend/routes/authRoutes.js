const router = require('express').Router();
const userCtrl = require('../controllers/authController')

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);


module.exports = router;