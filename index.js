var express = require("express");
var consign = require("consign");

const app = express();

consign()
.include("db.js")
.then("Models")
.then("libs/middlewares.js")
.then("Routes")
.then("libs/boot.js")
.into(app);

