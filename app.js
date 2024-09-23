const express = require("express");
const bodyParser = require("body-parser");

const db = require("./database/mongodb");

const postRouter = require("./routes/post-route");

const handleCORS = require("./middlewares/handleCORS");

const app = express();

app.use(bodyParser.json());

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
