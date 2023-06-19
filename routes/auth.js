const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/user");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("LoginAndRegister/LoginAndRegister");
});

router.get("/login", (req, res) => {
  res.render("LoginAndRegister/LoginAndRegister");
});

router.post("/register", async (req, res) => {
  const user = req.body.user;
  const hashedPass = await bcrypt.hash(user.password, 10);
  const newUser = new User({ ...user, password: hashedPass });
  await newUser.save();
  res.send(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.user.email });
  if (user && bcrypt.compare(req.body.user.password, user.password)) {
    res.send(user);
  } else {
    res.redirect("/auth/login");
  }
});

module.exports = router;
