require("dotenv").config();
const jwt = require('jsonwebtoken');


const getUserId = (req) => {
    // on vérifie le userId du token
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
    const userId = decodedToken.userId;
    return userId; 
    
}

module.exports = getUserId; 
