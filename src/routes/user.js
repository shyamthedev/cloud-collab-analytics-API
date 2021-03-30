const express = require('express');
const User = require('../model/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const router = express.Router();

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