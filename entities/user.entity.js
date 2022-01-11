"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    confirmed: { type: Boolean, default: false },
    avatar: { type: String, default: "" },
  },
  { timestamps: true }
);

const UserEntity = mongoose.model("User", user);

module.exports = UserEntity;
