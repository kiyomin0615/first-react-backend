const express = require("express");

const db = require("./database/mongodb");

const postRouter = require("./routes/post-route");

const handleCORS = require("./middlewares/handleCORS");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(handleCORS);

app.use(postRouter);

db.connectToDatabase()
  .then(() => {
    app.listen(8080);
  })
  .catch((error) => {
    console.log("Failed to connect to database.");
    console.log(error);
  });
