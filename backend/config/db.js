const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE_DB, 
    process.env.USER_DB, 
    process.env.PASSWORD_DB, 
    {
        dialect: "mysql",
        host: "localhost",
    });


module.export = sequelize; 

