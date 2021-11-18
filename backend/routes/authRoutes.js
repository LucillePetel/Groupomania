const router = require('express').Router();
const userCtrl = require('../controllers/authController')

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/logout", userCtrl.logout);
router.get("/deleteAccount/:id", userCtrl.desactivateAccount);


module.exports = router;