const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
    default: "",
  },

  special_right: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
