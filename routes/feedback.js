const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("feedback/feedback");
});
router.get("/confirm", (req, res) => {
  res.render("feedback/feedbackConfirm");
});

module.exports = router;
