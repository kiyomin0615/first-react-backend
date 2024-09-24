const Post = require("../models/post");

async function getAllPosts(req, res) {
  const posts = await Post.getAllPosts();
  res.status(200).json(posts);
}

async function addNewPost(req, res) {
  const { author, content } = req.body;
  const newPost = new Post(author, content);
  newPost.addNewPost();
}

module.exports = {
  getAllPosts: getAllPosts,
  addNewPost: addNewPost,
};
