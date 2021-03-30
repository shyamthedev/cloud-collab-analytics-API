const express = require("express");
const User = require("../model/user.js");
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

module.exports = router;
