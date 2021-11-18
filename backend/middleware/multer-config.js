const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        
    }
})