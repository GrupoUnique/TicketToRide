
const mongoose = require('mongoose');
const User = require('./User.js');
const data = require('/home/yuri/mais_um/Docs/data.json');
mongoose.connect('mongodb+srv://YuriCavalcanti:<'+data.mongo.con.pass+'>@tickettoride-5qlij.gcp.mongodb.net/test?retryWrites=true&w=majority',{useMongoClient:true});
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
