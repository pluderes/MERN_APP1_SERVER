const express = require("express");
const Controller = require("../controllers/index.controller");

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  try {
    const post_name = req.body;
    const result = await Controller.PostController.getAllPost({ post_name });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      msg: "err get all posts --router",
    });
  }
});

postRouter.post("/addPost", async (req, res) => {
  try {
    const new_post = req.body;
    const result = await Controller.PostController.createPosts({ new_post });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      msg: "err create posts --router",
    });
  }
});

postRouter.patch("/updatePost", async (req, res) => {
  try {
    const data_update = req.body;
    const postID = data_update.postID;
    const result = await Controller.PostController.updatePost({
      postID,
      data_update: data_update,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      msg: "err update posts --router",
    });
  }
});

postRouter.delete("/deletePost/:postID", async (req, res) => {
  try {
    const postID = req.params.postID;
    const post_name = "";
    let result = await Controller.PostController.deletePost(postID);
    if (result) {
      result = await Controller.PostController.getAllPost({ post_name });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({
      msg: "err delete posts --router",
    });
  }
});

module.exports = postRouter;
