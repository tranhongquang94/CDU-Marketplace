require("dotenv").config();
const PORT = process.env.PORT || 3010;

//Express Setup
const express = require("express");
const app = express();
//Mongoose Setup
const mongoose = require("mongoose");

// Use urlencoded (URL Encoded) for parsing form data from HTML into req.body, extended: true for accepting JSON format in form field.
app.use(express.urlencoded({ extended: true }));
//Parsing JSON-data into req.body
app.use(express.json());

//Mongoose Setup
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connected to database");
});

//Router
const itemRouter = require("./routes/item.route");
app.use("/item",itemRouter);

const accountRouter = require("./routes/account.route");
app.use("/account", accountRouter);

const categoryRouter = require("./routes/category.route");
app.use("/category",categoryRouter);

//Path for Deployment
const path = require('path');
app.use(express.static(path.join(__dirname,"client","build")));

app.get("*",(req,res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// 404 if route or rss requested does not exist. Place at bottom below other routes.
app.use((req, res) => {
  res.status(404).send("Unable to find resources.");
});


app.listen(PORT, () => {
  console.log(`Express App listen on port ${PORT}`);
});
