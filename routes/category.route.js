const router = require("express").Router();
let Category = require("../models/category.model");


//Create or add new categories
router.route("/add").post(async (req,res) => {
  const {name, thumbnail} = req.body;

  const newCategory = new Category({name, thumbnail});

  try {
    const savedCategory = await newCategory.save();
    console.log(savedCategory);
    res.status(200).send("New category created"); 
  } catch (error) {
    res.status(400).send(error);
  }
})

module.exports = router;
