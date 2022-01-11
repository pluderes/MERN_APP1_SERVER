const mongoose = require("mongoose");
const PostEntity = require("../entities/posts.entity");

const getAllPost = async ({ post_name }) => {
  try {
    const regexName = new RegExp(`${post_name}`);
    const query = {};
    if (post_name) query.post_name = regexName;
    const result = await PostEntity.find(query);
    return result;
  } catch (error) {
    console.log("err get all posts --models", err);
    throw err;
  }
};

const createPost = async ({ new_post }) => {
  try {
    const result = await PostEntity.create(new_post);
    return result;
  } catch (err) {
    console.log("err create post --models", err);
    throw err;
  }
};

const updatePost = async ({ postID, data_update }) => {
  try {
    const result = await PostEntity.findOneAndUpdate(
      { _id: postID },
      { $set: data_update },
      { new: true }
    );
    return result;
  } catch (err) {
    console.log("err update post --models", err);
    throw err;
  }
};

const deletePost = async (postID) => {
  try {
    const result = await PostEntity.findOneAndDelete({ _id: postID });
    return result;
  } catch (err) {
    console.log("err update post --models", err);
    throw err;
  }
};

module.exports = {
  getAllPost,
  createPost,
  updatePost,
  deletePost,
};
