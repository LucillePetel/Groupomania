const jwt = require('jsonwebtoken');
require("dotenv").config();



module.exports = (req, res, next) => {

  try {

    //const token = req.headers["authorization"];
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
    const userId = decodedToken.userId;
    

    if (req.body.userId && req.body.userId !== userId) {
      throw 'Authentification écouée';
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({error : 'Authentification impossible'});
  }
};