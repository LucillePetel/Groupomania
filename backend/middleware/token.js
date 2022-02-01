require("dotenv").config({path: '../config/.env'});
const jwt = require('jsonwebtoken');


function getUserId(req) {
    // on vérifie le userId du token
    const token = req.headers.authorization.split(" ")[1]; 
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN); 
    const userId = decodedToken.sub;
    return userId; 
    
}



module.exports.getUserId = getUserId; 
