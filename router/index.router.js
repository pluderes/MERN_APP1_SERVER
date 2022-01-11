const express = require("express");
const postRouter = require("./ports.router");
const userRouter = require("./user.router");

const app = express();

app.use("/post", postRouter);
app.use("/user", userRouter);

module.exports = app;
