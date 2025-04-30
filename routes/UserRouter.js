const express = require('express');
const router = express.Router();
const {User} = require("../models/Users");
const bcrypt = require("bcrypt");

const newUser = async (req, res) => {
    let user = await User.findOne({email: req.body.email});
    if (user) return res.status(400).send("User already registered!");

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    try {
        await user.save();
        res.status(200).send({message: "User Created Successfully!", user: user});
    } catch (error) {
        res.status(500).send("Internal Server Error!");
    }
}



router.route("/")
    .post(newUser);

module.exports = router;
