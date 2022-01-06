const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    category: {
      type: String
    },
    make: {
      type:String
    },
    model: {
      type: String
    },
    price: {
      type: Number,
      required: true,
    },
    jobCategory: {
      type: String
    },
    location: {
      type: String
    },
    description : {
      type: String
    },
    postedBy: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;