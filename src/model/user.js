const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    phone:{
        type : Number,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
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



const User = mongoose.model('User',user);

module.exports = User;