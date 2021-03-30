var mongoose = require("mongoose");
const jwt=require('jsonwebtoken')
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

user.methods.generateToken = async function () {
    try {
        const user = this;
        const token = jwt.sign({ id: user._id }, "Bhanu@8247065499")
        return token;
    } catch (error) {
        throw new Error(error)
    }
}



const User = mongoose.model('User',user)

module.exports = User;