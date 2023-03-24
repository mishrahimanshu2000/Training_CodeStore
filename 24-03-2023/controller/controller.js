const User = require('../model/usermodel');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Pages');
const db = mongoose.connection;

const getUsers = async(req, res)=>{
    console.log("in getUsers");
    console.log(res.returnresults)
    res.json(res.returnresults)
}

exports.getUsers = getUsers;
