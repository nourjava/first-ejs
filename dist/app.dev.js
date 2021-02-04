"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var app = express();
var firsts = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'narrow'
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    kinday: day,
    kin0day: firsts
  });
});
app.post("/", function (req, res) {
  var first = req.body.fName;
  firsts.push(first);
  res.redirect("/");
});
app.listen(3000, function () {
  console.log("Server started on port 3000,");
});