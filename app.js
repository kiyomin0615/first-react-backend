const express = require("express");
const bodyParser = require("body-parser");

const postRouter = require("./routes/post-route");

const handleCORS = require("./middlewares/handleCORS");

const app = express();

app.use(bodyParser.json());

app.use(handleCORS);

app.use(postRouter);

app.listen(8080);