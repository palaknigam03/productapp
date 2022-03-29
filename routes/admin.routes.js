const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');
const adminController =require('../controller/admin.controller');
const{body,valdiationResult} = require('express-validator');

router.post("/signup",
  body('email').isEmail(),

  adminController.signup
);

router.post("/signin",
  body('email').isEmail(),
  body('password','Oops! something wents wrong..'),
  adminController.signin
)

module.exports = router;