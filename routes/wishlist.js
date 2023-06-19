const express = require("express");
const Item = require("../model/item");
const User = require("../model/user");

const router = express.Router();

const addProduct = async (req, res, next) => {
  const _id = req.params._id;
  const name = req.params.name || "Devansh";
  const product = await Item.find({ _id });
  const user = await User.findOne({ name });
  user.wishlist.push(_id);
  await user.save();
  next();
};

const removeProduct = async (req, res, next) => {
  const id = req.params._id;
  const name = req.params.name || "Devansh";
  const product = await Item.find({ _id: id });
  const user = await User.findOne({ name }).populate("wishlist");
  user.wishlist = user.wishlist.filter((_id) => _id._id.toString() !== id);
  await user.save();
  next();
};

router.get("/", async (req, res) => {
  const name = "Devansh";
  let products = await User.findOne({ name }).populate("wishlist");
  products = products.wishlist || [];
  let sum = 0;
  products.forEach((product) => {
    sum += product.price;
  });
  res.render("wishlist/wishlist", { products, user: { name: "Devansh" }, sum });
});

router.post("/add/:_id/:name", addProduct, async (req, res) => {
  res.redirect("/");
});

router.post("/remove/:_id/:name", removeProduct, async (req, res) => {
  res.redirect("/wishlist");
});

module.exports = router;
