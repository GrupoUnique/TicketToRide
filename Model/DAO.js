
const mongoose = require('mongoose');
const User = require('./User.js');
mongoose.connect('mongodb+srv://YuriCavalcanti:<'+data.mongo.env.pass+'>@tickettoride-5qlij.gcp.mongodb.net/test?retryWrites=true&w=majority',{useMongoClient:true});
const db = mongoose.connection;
const express = require('express');
export default class MongQuerys{
    InsertUser(usuario, senha){
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            user:usuario,
            pass:senha,
        });
        user.save().then().catch(err=>console.log(err));
    }
}
