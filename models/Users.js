const {Schema, model} = require("mongoose");
const jwt = require("jsonwebtoken");


const UserSchema = new Schema({ 
    name: {type: String, required: true, min: 5, max: 100},
    email: {type: String, required: true, unique: true, min: 8, max: 255},
    password: {type: String, required: true, min: 8, max: 1024},
    role: {type: String, default: "user", enum: ["admin", "user"]},
})

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, email: this.email, role: this.role}, process.env.MYSECRETKEY, {expiresIn: "1h"});
    return token;
}

const User = model("User", UserSchema); 
exports.User = User;