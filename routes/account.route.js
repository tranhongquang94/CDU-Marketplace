const router = require("express").Router();
let Account = require("../models/account.model");

/**
 * Register
 */

router.route("/create").post(async (req, res) => {
  const { username, password } = req.body;
  const newAccount = new Account({
    username,
    password,
  });
  try {
    const savedAccount = await newAccount.save();

    res
      .status(200)
      .json({ mes: "Welcome to CDU Marketplace", result: savedAccount });
  } catch (error) {
    res.status(404).json({
      mes: "There are errors in creating your account, please try again.",
      error,
    });
  }
});

/**
 * Sign In
 */

router.route("/login").post(async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await Account.findOne({ username, password });
    if (result) {
      res.status(200).json({ result: result, mes: "Login Successfully!" });
    } else {
      res
        .status(200)
        .json({ mes: "Username or password is incorrect. Please try again" });
    }
  } catch (error) {
    res
      .status(404)
      .json({
        mes: "Sorry, we could not proceed your request at the moment.",
        error,
      });
  }
});

/**
 * Question to poster - Doing
 */

router.route("/inquiry").post((req, res) => {
  const { inquiry } = req.body;
  res.status(200).send("Inquiry received!");
});

module.exports = router;
