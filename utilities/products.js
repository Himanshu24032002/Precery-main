const item = require("../model/item");
const Item = require("../model/item");

module.exports.popularProductItems = [
  {
    name: "apple",
    quantity: 1,
    price: 100,
    img: "https://i.imgur.com/vUJ2JKU.png",
  },
  {
    name: "chili",
    quantity: 1,
    price: 80,
    img: "https://i.imgur.com/rFhSMZN.png",
  },
  {
    name: "onion",
    quantity: 1,
    price: 50,
    img: "https://i.imgur.com/sGLggWL.jpg",
  },
  {
    name: "potato",
    quantity: 1,
    price: 60,
    img: "https://i.imgur.com/WFjH6ui.png",
  },
  {
    name: "garlic",
    quantity: 1,
    price: 50,
    img: "https://i.imgur.com/XVLuy2J.png",
  },
  {
    name: "tomato",
    quantity: 1,
    price: 80,
    img: "https://i.imgur.com/8l5hDhS.png",
  },
];

module.exports.popularBundleItems = [
  {
    name: "Big Pack",
    quantity: "Lemon, Tomato, Potato,+4",
    img: "https://i.imgur.com/Zm8Xo2j.png",
    price: 500,
  },
  {
    name: "Large Pack",
    quantity: "Lemon, Tomato, Potato,+2",
    img: "https://i.imgur.com/vMA9mRm.jpg",
    price: 800,
  },
  {
    name: "Small Pack",
    quantity: "Lemon, Tomato, Potato",
    img: "https://i.imgur.com/CeVqxe2.png",
    price: 300,
  },
  {
    name: "Big Pack",
    quantity: "Lemon, Tomato, Potato,+4",
    img: "https://i.imgur.com/Zm8Xo2j.png",
    price: 900,
  },
  {
    name: "Large Pack",
    quantity: "Lemon, Tomato, Potato,+2",
    img: "https://i.imgur.com/vMA9mRm.jpg",
    price: 700,
  },
  {
    name: "Small Pack",
    quantity: "Lemon, Tomato, Potato",
    img: "https://i.imgur.com/CeVqxe2.png",
    price: 400,
  },
];

module.exports.Medicine = [
  {
    name: "Cetirizine 10mg",
    quantity: "10 Tablets",
    price: 16.1,
    img: "https://i.imgur.com/QWMkLQ6.jpg",
  },
  {
    name: "CUFRIL-D Cough Syrup",
    quantity: "1",
    price: 88,
    img: "https://i.imgur.com/t3jlpYD.jpg",
  },
  {
    name: "Cheston Cold",
    quantity: "10 Tablets",
    price: 34,
    img: "https://i.imgur.com/KqTyIOv.png",
  },
  {
    name: "Dolo 650",
    quantity: "15 Tablets",
    price: 24.75,
    img: "https://i.imgur.com/ZgxivW4.jpg",
  },
  {
    name: "Metolar XR 50",
    quantity: "15 Tablets",
    price: 17.66,
    img: "https://i.imgur.com/VfI11ZP.png",
  },
  {
    name: "Gelusil Chewable Tablets",
    quantity: "10 Tablets",
    price: 15.92,
    img: "https://i.imgur.com/v7EIJzM.jpg",
  },
];
module.exports.Beauty = [
  {
    name: "Lakme Blush and Glow Face Wash",
    quantity: "100 g",
    price: 144,
    img: "https://i.imgur.com/RulBeyf.jpg",
  },
  {
    name: "Ponds Men Pollution Out Facewash",
    quantity: "100 g",
    price: 159,
    img: "https://i.imgur.com/azJYLRo.jpg",
  },
  {
    name: "Nivea Body Milk",
    quantity: "200 ml",
    price: 178,
    img: "https://i.imgur.com/XroaNlX.jpg",
  },
  {
    name: "Nivea Lip Balm",
    quantity: "1",
    price: 151,
    img: "https://i.imgur.com/0eK7qXj.jpg",
  },
  {
    name: "Berado Hair Growth Oil",
    quantity: "50 ml",
    price: 585,
    img: "https://i.imgur.com/qnTjfBG.jpg",
  },
  {
    name: "Olay Total Effects Day Cream",
    quantity: "50 g",
    price: 749,
    img: "https://i.imgur.com/Hmo66oR.jpg",
  },
];
module.exports.Gardening = [
  {
    name: "Gardening Gloves",
    quantity: "1",
    price: 160,
    img: "https://i.imgur.com/dBujtOd.jpg",
  },
  {
    name: "Watering Can",
    quantity: "1",
    price: 249,
    img: "https://i.imgur.com/tB2zQj8.jpg",
  },
  {
    name: "Unigrow Manure",
    quantity: "900 g",
    price: 196,
    img: "https://i.imgur.com/xguc80f.jpg",
  },
];
module.exports.Office = [
  {
    name: "Kangaroo Stapler No.-10",
    quantity: "5",
    price: 210,
    img: "https://i.imgur.com/mZtkksq.jpg",
  },
  {
    name: "Kangaroo Punching Machine",
    quantity: "1",
    price: 142,
    img: "https://i.imgur.com/KkYKE2x.jpg",
  },
  {
    name: "Natraj HB Pencils",
    quantity: "Pack of 10",
    price: 300,
    img: "https://i.imgur.com/fFUTngw.jpg",
  },
  {
    name: "Natraj Ball Pens",
    quantity: "Pack of 10",
    price: 167,
    img: "https://i.imgur.com/yl5NWbN.jpg",
  },
  {
    name: "Post It Sticky Notes",
    quantity: "Pack of 6",
    price: 385,
    img: "https://i.imgur.com/tHqNkY2.jpg",
  },
  {
    name: "Kangaroo Stapler Pins No.-10",
    quantity: "Pack of 5",
    price: 237,
    img: "https://i.imgur.com/BZfAFQm.jpg",
  },
];
module.exports.BabyCare = [
  {
    name: "Johnson's Baby Oil",
    quantity: "500 ml",
    price: 425,
    img: "https://i.imgur.com/0LKWxiJ.jpg",
  },
  {
    name: "Little's Baby Wipes",
    quantity: "85 Wipes",
    price: 95,
    img: "https://i.imgur.com/6rlktPI.jpg",
  },
  {
    name: "Mama Earth Baby Moisturizer",
    quantity: "400 ml",
    price: 339.15,
    img: "https://i.imgur.com/DEONooZ.jpg",
  },
  {
    name: "Himalaya Baby Shampoo",
    quantity: "400 ml",
    price: 230,
    img: "https://i.imgur.com/fuAMCYN.jpg",
  },
  {
    name: "Johnson's Baby Powder",
    quantity: "200 g",
    price: 155,
    img: "https://i.imgur.com/HsECirZ.jpg",
  },
  {
    name: "Pampers Baby Pants",
    quantity: "58 Pants",
    price: 699,
    img: "https://i.imgur.com/97mm2rX.jpg",
  },
];

const seed = () => {
  console.log(item)
  popularBundleItems.forEach(async (bundle) => {
    const Newbundle = new Item({ ...bundle, category: "Bundle"  });
    await Newbundle.save();
  });

  popularProductItems.forEach(async (product) => {
    const Newproduct = await Item.create({ ...product, category: "Fruit"  });
    await Newproduct.save();
  });

  // Medicine.forEach(async (product) => {
  //   const Newproduct = await Item.create({ ...product, category: "Medicine" });
  //   await Newproduct.save();
  // });

  // Beauty.forEach(async (product) => {
  //   const Newproduct = await Item.create({ ...product, category: "Beauty" });
  //   await Newproduct.save();
  // });

  // BabyCare.forEach(async (product) => {
  //   const Newproduct = await Item.create({ ...product, category: "Baby Care" });
  //   await Newproduct.save();
  // });

  // Gardening.forEach(async (product) => {
  //   const Newproduct = await Item.create({ ...product, category: "Gardening" });
  //   await Newproduct.save();
  // });

  // Office.map(async (product) => {
  //   const Newproduct = await Item.create({ ...product, category: "Office" });
  //   await Newproduct.save();
  // });

  console.log("Wah add ho gaya");
};