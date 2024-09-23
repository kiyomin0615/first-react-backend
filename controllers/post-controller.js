const Post = require("../models/post");

async function getAllPosts(req, res) {
  const posts = await Post.getAllPosts();
  res.status(200).json(posts);
}

module.exports = {
  getAllPosts: getAllPosts,
};
