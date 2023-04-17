const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://linuxwasim:linuxwasim@cluster0.eg7igcv.mongodb.net/MSRITEATS'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose