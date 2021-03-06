require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const app = express();

const bodyParser = require("body-parser")

//db connect
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


const port = process.env.PORT || 8000;
//running on port
app.listen(port, () => {
    console.log(`app is running ${port}`);
})