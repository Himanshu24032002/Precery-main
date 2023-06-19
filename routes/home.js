const express = require("express");
const Item = require("../model/item");
const User = require("../model/user");
const url = require("url");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Item.find({ category: "Fruit" });
  const bundle = await Item.find({ category: "Bundle" });
  const user = await User.findOne({ name: "Devansh" });
  let cartItem,wishlistItem;
 if(!user){
   cartItem = 0
   wishlistItem = 0
 }else{
   cartItem = user.cart.length;
   wishlistItem = user.wishlist.length;
 }
  res.render("home/home", {
    products,
    bundle,
    user: { name: "Devansh" },
    wishlistItem,
    cartItem,
  });
});

router.get("/search", async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  const products = await Item.find({
    $or: [
      { name: { $regex: query, $options: "i" } }, // Match name field with query
      { category: { $regex: query, $options: "i" } }, // Match category field with query
    ],
  });
  const user = await User.findOne({ name: "Devansh" });
  let cartItem = user.cart.length;
  let wishlistItem = user.wishlist.length;
  res.render("home/searchResult", {
    products,
    user: { name: "Devansh" },
    wishlistItem,
    cartItem,
  });
});

module.exports = router;
