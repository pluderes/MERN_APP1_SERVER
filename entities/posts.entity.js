"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    attachment: { type: String },
    likeCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const PostEntity = mongoose.model("Post", post);

module.exports = PostEntity;
