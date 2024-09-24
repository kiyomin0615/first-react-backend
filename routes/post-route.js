const express = require("express");

const postController = require("../controllers/post-controller");

const router = express.Router();

router.get("/posts", postController.getAllPosts);

router.post("/posts", postController.addNewPost);

module.exports = router;
