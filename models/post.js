const db = require("../database/mongodb");

class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }

  static async getAllPosts() {
    let posts = await db.getDatabase().collection("posts").find({}).toArray();
    return posts;
  }

  async addNewPost() {
    await db
      .getDatabase()
      .collection("posts")
      .insertOne({ author: this.author, content: this.content });
  }
}

module.exports = Post;
