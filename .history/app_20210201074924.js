const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/test', 
{useNewUrlParser: true});


const port = 8000;
app.listen(port , () => {
    
})