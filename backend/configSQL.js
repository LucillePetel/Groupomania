const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
    host: 'localhost',
    user: USER_DB,
    password: PASSWORD_DB,
    database: DB 
});

module.exports.getDB = () => {
    return db
}