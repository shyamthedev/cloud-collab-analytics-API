var mongoose = require("mongoose");

const bcrypt=require('bcrypt')

const user = new mongoose.Schema({
  name: {
    require: true,
    unique: false,
    type: String,
  },
  phone: {
    type: Number,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
});

user.pre('save',async function(next){
    try {
        const user=this;
        // console.log(user.password);
        user.password=await bcrypt.hash(user.password,8)
        next();
    } catch (error) {
        console.log(error);
        
    }
})



const User = mongoose.model('User',user)

module.exports = User;
