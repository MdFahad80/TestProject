const {Schema, model} = require("mongoose");

const User = model("User", Schema({ 
    name: {type: String, required: true, min: 5, max: 100},
    email: {type: String, required: true, unique: true, min: 8, max: 255},
    password: {type: String, required: true, min: 8, max: 1024},
})); 

exports.User = User;