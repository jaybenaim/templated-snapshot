var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/email", function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(8000, function() {
  console.log("CORS-enabled web server listening on port 80");
});
