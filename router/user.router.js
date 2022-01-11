const express = require("express");
const Controller = require("../controllers/index.controller");

const userRouter = express.Router();

userRouter.get("/login", async (req, res) => {
  try {
    const data_login = req.body;
    const result = await Controller.UserController.loginUser(data_login);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "err login --router",
    });
  }
});

userRouter.post("/createUser", async (req, res) => {
  try {
    const new_user = req.body;
    const result = await Controller.UserController.createUser({ new_user });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      msg: "err create user --router",
    });
  }
});

module.exports = userRouter;
