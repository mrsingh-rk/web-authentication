//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
// //const md5 = require("md5");
// const bcrypt = require("bcrypt");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require(passport-local-mongoose);

const app = express();
const saltRounds = 10;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});


// userSchema.plugin(encrypt, {
//   secret: process.env.SECRET,
//   encryptedFields: ["password"]
//});

const User = new mongoose.model("User", userSchema);



app.get("/", function(req, res) {
  res.render("home");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/register", function(req, res) {
  res.render("register");
});


app.post("/register", function(req, res) {



// bcrypt.hash(req.body.username, saltRounds, function(err, hash) {
//   const newUser = new User({
//     email: req.body.username,
//     password: hash
//   });
//
//   newUser.save(function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("successfully");
//       res.render("secrets");
//     }
//   });
//   });
});





// const newUser = new User({
//   email : req.body.username,
//   password : md5(req.body.password)
// });
// newUser.save( function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully");
//     res.render("secrets");
//   }
// });
//});

app.post("/login", function(req, res) {




  // const username = req.body.username;
  // const password = req.body.password;
  //
  // User.findOne({ email: username }, function(err, foundUser) {
  //   if (err) {
  //     console.log("no user found");
  //   } else {
  //     if (foundUser) {
  //       bcrypt.compare(password , foundUser.password , function(err, result){
  //         if( result === true){
  //           console.log("Correct User");
  //           res.render("secrets");
  //         }else{
  //           console.log("fail")
  //         }
  //       });
  //     }
  //   }
  // });
});

app.listen(3000, function() {
  console.log("app is listening in  port 3000");
});
