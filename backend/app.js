const express = require('express'); 
const cookieParser = require("cookie-parser");
const cors = require('cors');



//Init express app
const app = express();

const path = require('path');

//Security 
const helmet = require('helmet');

//Helmet
app.use(helmet());

app.use(cors());


require("dotenv").config({path: './config/.env'});

const { sequelize } = require('./models/index');

//Middleware Cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    });
 

//Express parser 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


app.use('/images', express.static(path.join(__dirname, "images")));


//Route file
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const commentRoutes = require("./routes/comment.routes");

//Routes    
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use("/api/comments", commentRoutes);

const dbConnect = async function () {
    try {
      await sequelize.authenticate();
      console.log('Connexion à la basse de donnée');
    } catch (error) {
      console.error('connexion impossible:', error);
    }
  };
  dbConnect();

//Export
module.exports = app;