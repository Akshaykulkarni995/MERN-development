const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb://localhost/test', 
{useNewUrlParser: true});