const { Schema, Types, model } = require("mongoose");

const filmSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  avgRate: {
    type: Number,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  comments: [
    {
      author: {
        type: Types.ObjectId,
        ref: "User",
      },
      title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
      },
    },
  ],
});

module.exports = model("Film", filmSchema);
