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



require("dotenv").config({path: './config/.env'});

const { sequelize } = require('./models/index');

//Middleware Cors
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));

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