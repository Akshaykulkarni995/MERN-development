require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const app = express();

//db connect
mongoose.connect(process.env.DATABASE, 
{useNewUrlParser: true,
    useUnifiedTopology:true ,
    useCreateIndex:true}).then(() => {

        console.log("DB CONNECTED")
    }).catch(
{
    
}
    )


const port =  process.env.PORT || 8000; 
//running on port
app.listen(port , () => {
    console.log(`app is running ${port}`);
})