const PostModel = require("../models/posts.model");
const errorMessage = require("../config").errorMessage;

const getAllPost = async ({ post_name }) => {
  try {
    const result = await PostModel.getAllPost({ post_name });
    if (!result) {
      res.status(402).json(errorMessage(["err get all post --controller"]));
    } else {
      return result;
    }
  } catch (error) {
    res.status(402).json(errorMessage(["err get all post --controller", err]));
  }
};

const createPosts = async ({ new_post }) => {
  try {
    const result = await PostModel.createPost({ new_post });
    if (!result) {
      res.status(402).json(errorMessage(["err create post --controller"]));
    } else {
      return result;
    }
  } catch (error) {
    res.status(402).json(errorMessage(["err create post --controller", err]));
  }
};

const updatePost = async ({ postID, data_update }) => {
  try {
    const result = await PostModel.updatePost({ postID, data_update });
    if (!result)
      res.status(402).json(errorMessage(["err update post --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err update post --controller", err]));
  }
};

const deletePost = async (postID) => {
  try {
    const result = await PostModel.deletePost(postID);
    if (!result)
      res.status(402).json(errorMessage(["err delete post --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err delete post --controller", err]));
  }
};

module.exports = {
  getAllPost,
  createPosts,
  updatePost,
  deletePost,
};
