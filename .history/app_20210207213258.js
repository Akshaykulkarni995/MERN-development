require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//db connecttion
mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log("DB CONNECTED")
    }).catch(() => {
        console.log("DB GOT OOPSS")
    }
    );


//middleware
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors());
     


//myroutes
app.use("/api", authRoutes);




//port 
const port = process.env.PORT || 8000;



//running on port
app.listen(port, () => {
    console.log(`app is running ${port}`);
})