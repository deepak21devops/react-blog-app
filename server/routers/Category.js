const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const newCat = await newCategory.save();
    res.status(200).json(newCat);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
