const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.post("/registration", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hashPassword,
      email: req.body.email,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ username: req.body.username });
    !userData && res.status(400).json("Invalid Credentials");

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    !passwordMatch && res.status(400).json("Invalid Credentials");

    const { password, ...others } = userData._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
