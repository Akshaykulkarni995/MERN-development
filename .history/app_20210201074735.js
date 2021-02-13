const mongoose = require('mongoose');
const express = require('express');
const app = express

mongoose.connect('mongodb://localhost/test', 
{useNewUrlParser: true});