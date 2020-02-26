const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const app = express();

// Body Parser for POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors
app.use(cors());

// Dotenv
require("dotenv").config();
// SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Routes
app.get("/", (req, res, next) => {
  res.send("Home");
});

app.post("/email", (req, res, next) => {
  const { name, email, message } = req.headers;
  console.log(req.headers);
  console.log(req.body);
  const msg = {
    to: "benaimjacob@gmail.com",
    from: email,
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  };
  // sgMail
  //   .send(msg)
  //   .then(res => {
  //     console.log("Success");
  //   })
  //   .catch(err => {
  //     console.log("Error", err);
  //   });

  res.send({ name, email, message });
});

app.listen(8000, function() {
  console.log("CORS-enabled web server listening on port 8000");
});
