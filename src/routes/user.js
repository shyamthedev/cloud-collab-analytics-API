const express = require("express");
const User = require("../model/user.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.send({
        status: "Failure",
        code: 0,
        data: null,
        meassage: "user already exists",
      });
    }
    user = new User({ ...req.body });
    user = await user.save();
    res.send({
      status: "success",
      code: 1,
      data: user,
      meassage: "user registered successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req,res,next)=>{
  try {
      let user = await User.findOne({email:req.body.email});
      if(user){
          const isMatched = await bcrypt.compare(req.body.password,user.password);
          if(!isMatched){
              return res.send({
                  status:"failure",
                  code :0,
                  data : null,
                  message : "password in-correct"
              })
          }
          const token = await user.generateToken();
          res.send({
              status: 'Success',
              code: 1,
              data: token,
              message: 'Login Successful'
           })
      }
      res.send({
          status:"failure",
          code :0,
          data : null,
          message : "email doesnt exists"
      })
  } catch (error) {
      console.log(error);
  }
})

module.exports = router;