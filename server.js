const express = require("express");
// const store = require("./store");

const app = express();

app.get("/programs", function(req, res) {
  res.send("You have no programs.");
});

app.listen("8080");
