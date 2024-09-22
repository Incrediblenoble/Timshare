const express = require("express");
const User = require("../models/userModel");
const Verification = require("../models/verificationModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const nodemailer = require("nodemailer");
const responseFunction = require("../utils/responseFunction");
const fs = require("fs");
const errorHandler = require("../middlewares/errorMiddleware");
const authTokenHandler = require("../middlewares/checkAuthToken");

async function mailer(recieveremail, code) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "tumson100000@gmail.com",
      pass: "xfdw hggf xpzs mhpp",
    },
  });

  let info = await transporter.sendMail({
    from: "Team BitS",
    to: recieveremail,
    subject: "OTP for verification",
    text: "Your OTP is " + code,
    html: "<b>Your OTP is " + code + "</b>",
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

router.get("/test", (req, res) => {
  res.send("Auth routes are working!");

  mailer("testmanmail750@gmail.com", 123456);
});

module.exports = router;
