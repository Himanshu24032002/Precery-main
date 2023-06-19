const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("contact/contact");
});

router.get("/confirm", (req, res) => {
  res.render("contact/contactConfirm");
});

module.exports = router;
