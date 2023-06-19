const express = require("express");
const Item = require("../model/item");
const User = require("../model/user");

const router = express.Router();

const addProduct = async (req, res, next) => {
  const _id = req.params._id;
  const name = req.params.name || "Devansh";
  const product = await Item.find({ _id });
  const user = await User.findOne({ name });
  user.cart.push(_id);
  await user.save();
  next();
};

const removeProduct = async (req, res, next) => {
  const id = req.params._id;
  const name = req.params.name || "Devansh";
  const product = await Item.find({ _id: id });
  const user = await User.findOne({ name }).populate("cart");
  user.cart = user.cart.filter((_id) => _id._id.toString() !== id);
  await user.save();
  next();
};

router.get("/", async (req, res) => {
  const name = "Devansh";
  let products = await User.findOne({ name }).populate("cart");
  products = products.cart || [];
  let sum = 0;
  products.forEach((product) => {
    sum += product.price;
  });
  res.render("cart/cart", { products, user: { name: "Devansh" }, sum });
});

router.post("/add/:_id/:name", addProduct, async (req, res) => {
  res.redirect("/");
});

router.post("/remove/:_id/:name", removeProduct, async (req, res) => {
  res.redirect("/cart");
});

router.get("/checkout", (req, res) => {
  res.render("cart/checkout");
});

router.get("/checkout/payment", (req, res) => {
  res.render("payment/payment");
});

router.get("/checkout/payment/confirm", (req, res) => {
  res.render("payment/paymentConfirm");
});

module.exports = router;
