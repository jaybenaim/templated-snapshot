const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();

app.get("/", (req, res, next) => {
  res.send("Home");
});
app.post("/email", (req, res, next) => {
  const { name, email, message } = req.headers;

  // async..await is not allowed in global scope, must use a wrapper
  // async function main() {
  //   // Generate test SMTP service account from ethereal.email
  //   // Only needed if you don't have a real mail account for testing
  //   let testAccount = await nodemailer.createTestAccount();
  //   // create reusable transporter object using the default SMTP transport
  //   let transporter = nodemailer.createTransport({
  //     host: "smtp.mailtrap.io",
  //     port: 2525,
  //     auth: {
  //       user: process.env.NODEMAILER_USERNAME,
  //       pass: process.env.NODEMAILER_PASSWORD
  //     }
  //   });
  //   // send mail with defined transport object
  //   let info = await transporter.sendMail({
  //     from: `"${name}" <${email}>`, // sender address
  //     to: "benaimjacob@gmail.com", // list of receivers
  //     subject: message, // Subject line
  //     text: message, // plain text body
  //     html: `<b>${message}</b>` // html body
  //   });

  //   console.log("Message sent: %s", info.messageId);
  //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //   // Preview only available when sending through an Ethereal account
  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  // }

  // main().catch(console.error);

  res.json({ name, email, message });
});

app.listen(8000, function() {
  console.log("CORS-enabled web server listening on port 8000");
});
