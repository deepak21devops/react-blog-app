const mongoose = require("mongoose");

const userPost = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", userPost);
