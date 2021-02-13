require('dotenv')

const mongoose = require('mongoose');
const express = require('express');
const app = express();

//db connect
mongoose.connect('mongodb://localhost/profile', 
{useNewUrlParser: true,
    useUnifiedTopology:true ,
    useCreateIndex:true}).then(() => {

        console.log("DB CONNECTED")
    });


const port =  process.env.PORT || 8000; 
//running on port
app.listen(port , () => {
    console.log(`app is running ${port}`);
})