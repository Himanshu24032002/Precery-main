const Item = require("../model/item");
const express = require("express");

const router = express.Router();

router.get("/fruits", async (req, res) => {
  const products = await Item.find({ category: "Fruit" });
  res.render("categories/fruits", { products, user: { name: "Devansh" } });
});

router.get("/babycare", async (req, res) => {
  const products = await Item.find({ category: "Baby Care" });
  res.render("categories/babycare", { products, user: { name: "Devansh" } });
});

router.get("/office", async (req, res) => {
  const products = await Item.find({ category: "Office" });
  res.render("categories/office", { products, user: { name: "Devansh" } });
});

router.get("/medicine", async (req, res) => {
  const products = await Item.find({ category: "Medicine" });
  res.render("categories/medicine", { products, user: { name: "Devansh" } });
});

router.get("/beauty", async (req, res) => {
  const products = await Item.find({ category: "Beauty" });
  res.render("categories/beauty", { products, user: { name: "Devansh" } });
});

router.get("/gardening", async (req, res) => {
  const products = await Item.find({ category: "Gardening" });
  res.render("categories/gardening", { products, user: { name: "Devansh" } });
});

module.exports = router;
