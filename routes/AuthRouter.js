const express = require('express');
const router = express.Router();
const {User} = require("../models/Users");
const bcrypt = require("bcrypt");

const AuthUser = async (req, res) => {
    let user = await User.findOne({email: req.body.email});  
    if (!user) return res.status(400).send("User not registered!");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid Password!");

    const token = user.generateAuthToken();

    res.status(200).send({message: "User Authenticated Successfully!", user: user, token: token});
}

router.route("/")
    .post(AuthUser);

module.exports = router;