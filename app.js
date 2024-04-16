var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var gptRouter = require("./routes/gpt");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/gpt", gptRouter);

app.get("/", function (req, res, next) {
  res.send({ title: "NetflixGPT APIs" });
});

module.exports = app;
