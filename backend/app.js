const express = require('express'); 
const path = require('path');
require("dotenv").config();

//Security 
const helmet = require('helmet');


//Init express app
const app = express();

//Helmet
app.use(helmet());


//Express parser 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Middleware Cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    });
 
//Route file
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
//const postRoutes = require("./routes/postRoutes");
//const commentRoutes = require("./routes/commentRoutes");

//Routes    
app.use("/api/auth", authRoutes);
app.use('/api/user', userRoutes)
//app.use("/api/post", postRoutes);
//app.use("/api/comment", commentRoutes);

//Export
module.exports = app;