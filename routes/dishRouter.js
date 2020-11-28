const router = require("express").Router();
const dish = require("../models/dish");

router.get("/allDishes", (req, res) => {
  dish.find().then((dishes, err) => {
    if (err) Throw(err);
    res.json(dishes);
  });
});

router.put("/updateDish", (req, res) => {
  dish.findOneAndUpdate({ _id: req.body._id }, req.body).then((Dish, err) => {
    if (err) Throw(err);
    res.json({ message: "Item successfully updated!" });
  });
});

router.post("/createDish", (req, res) => {
  const { name, url, description, price } = req.body;
  const newDish = new dish({
    name,
    url,
    description,
    price,
    liked: false,
  });
  newDish
    .save()
    .then((Dish, err) => {
      if (err) Throw(err);
      res.json(Dish);
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong" });
    });
});

module.exports = router;
