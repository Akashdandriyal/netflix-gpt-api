const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const gptRouter = require("./routes/gpt");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://netflix-gptstream.vercel.app"],
    optionsSuccessStatus: 200,
  })
);

app.use("/gpt", gptRouter);

app.get("/", function (req, res, next) {
  res.send({ title: "NetflixGPT APIs" });
});

module.exports = app;
