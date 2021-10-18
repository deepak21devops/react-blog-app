const mongoose = require("mongoose");

const userPost = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileimg: {
    type: String,
    default: "",
  },
});
