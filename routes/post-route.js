const express = require("express");

const postController = require("../controllers/post-controller");

const router = express.Router();

router.get("/posts", postController.getAllPosts);

router.post("/posts", postController.addNewPost);

router.get("/posts/:id", postController.getPost);

module.exports = router;
