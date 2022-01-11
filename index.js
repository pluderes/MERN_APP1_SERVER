const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Router = require("./router/index.router");
const { connect } = require("./config/dbConnect");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "2mb" }));
app.use(cors());

app.use("/", Router);

connect();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
