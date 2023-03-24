const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type:String, required:true },
    city : { type:String, required: true }
})

const model = mongoose.model('userSchema', userSchema);

module.exports = model;