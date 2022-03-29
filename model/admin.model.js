const express=require('express');
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type :String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model("signup",AdminSchema);