require("dotenv").config();
const router = require("express").Router();
const cloudinary = require("cloudinary").v2;
let Item = require("../models/item.model");
let Category = require("../models/category.model");

/**
 * All Items
 */

//Get list of items
router.route("/list").get(async (req, res) => {
  try {
    const listOfItems = await Item.find();
    res.status(200).json(listOfItems);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

//Most recent items
router.route("/recent").get(async (req, res) => {
  try {
    const result = await Item.find().sort({ createdAt: -1 }).limit(4);
    res.json(result);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

//Add new Item (ads)
router.route("/add").post(async (req, res) => {
  const { name, price, location, thumbnail, category, description } = req.body;
  const postedBy = req.body.username;

  let jobCategory = "";
  if (req.body["jobs-categories"]) {
    jobCategory = req.body["jobs-categories"];
  }

  const newItem = new Item({
    name,
    thumbnail,
    price,
    location,
    category,
    jobCategory,
    description,
    postedBy,
  });

  try {
    const savedItem = await newItem.save();
    console.log(savedItem);
    res.status(200).redirect("/");
  } catch (error) {
    //Need to handle error here
    res.status(400);
    console.log(error.message);
  }
});

router.route("/timestamp-signature").get(async (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = await cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      upload_preset: "ml_default",
      source: "uw",
    },
    process.env.CLOUDINARY_API_SECRET
  );
  res.status(200).json({ timestamp, signature });
});

/**
 * Cars
 */

//Recent Cars Item
router.route("/recent/cars").get(async (req, res) => {
  try {
    const result = await Item.find({ category: "cars" })
      .sort({
        createdAt: -1,
      })
      .limit(4);
    res.json(result);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

/**
 * Jobs
 */
router.route("/job").get(async (req, res) => {
  try {
    const result = await Item.find({ category: "jobs" });
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(200).send("No Jobs Opening");
    }
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

router.route("/job/:category").get(async (req, res) => {
  const { category } = req.params;
  try {
    const result = await Item.find({ category: "jobs", jobCategory: category });
    if (result.length) {
      res.status(200).send(result);
    } else {
      res.status(200).send("No Jobs Found.");
    }
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

/**
 * Accomodation
 */

//Recent accomodation
router.route("/recent/accomodation").get(async (req, res) => {
  try {
    const result = await Item.find({ category: "accomodation" })
      .sort({
        createdAt: -1,
      })
      .limit(4);
    res.json(result);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

/**
 * Display Single Item
 */

//Get Item by ID

router.route("/display/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Item.findById(id);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(200).send("There are no jobs with this ID.");
    }
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

//Get Item by Name
router.route("/list/:name").get(async (req, res) => {
  const { name } = req.params;
  try {
    const results = await Item.find({
      name: { $regex: name, $options: "i" },
    });
    if (results) {
      res.status(200).send(results);
    } else {
      res.status(200).send("No item found");
    }
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

//Suggest result based on what user type
router.route("/suggest").post(async (req, res) => {
  const searchQuery = req.body.data;
  try {
    const result = await Item.find({
      name: { $regex: searchQuery, $options: "i" },
    }).limit(10);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(200).send("No results.");
    }
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

/**
 * Get Number of ads in specific category
 */

router.route("/getnumberads").post(async (req, res) => {
  const { category } = req.body;
  try {
    const result = await Item.countDocuments({ category: category });
    const categoryList = await Category.find({ name: category });
    const { _id, name, thumbnail } = categoryList[0];
    res.status(200).json({
      _id,
      name,
      thumbnail,
      count: result,
    });
  } catch (error) {
    res
      .status(400)
      .send(`There was an error: ${error} in counting number of ads.`);
  }
});

module.exports = router;
