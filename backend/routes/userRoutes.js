const router = require('express').Router();
const userCtrl = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");


router.get("/", userCtrl.getAllUsers);



module.exports = router;