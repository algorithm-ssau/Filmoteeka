const { Schema, Types, model } = require("mongoose");

const filmSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  avgRate: {
    type: Number,
    required: true,
  },

  comments: [{
      author: {
          type: Types.ObjectId,
          ref: 'User',
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
      }
  }]
});

module.exports = model("User", filmSchema);
