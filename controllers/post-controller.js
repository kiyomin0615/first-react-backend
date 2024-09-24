const mongodb = require("mongodb");

const Post = require("../models/post");

async function getAllPosts(req, res) {
  const posts = await Post.getAllPosts();
  res.status(200).json(posts);
}

async function addNewPost(req, res) {
  const { author, content } = req.body;
  const newPost = new Post(author, content);
  newPost.addNewPost();
  res.status(201).json({ message: "New post added.", newPost: newPost });
}

async function getPost(req, res) {
  const posts = await Post.getAllPosts();
  const post = posts.find((post) => {
    return post._id.toString() === req.params.id;
  });
  res.status(200).json(post);
}

module.exports = {
  getAllPosts: getAllPosts,
  addNewPost: addNewPost,
  getPost: getPost,
};
