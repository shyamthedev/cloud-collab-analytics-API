const express=require('express');
var app=express();
require('./db/mongoose');
var PORT=process.env.PORT || 3000;

app.use(express.json());

const userRoute = require('./routes/user');

app.use('/users',userRoute)

app.listen(PORT,()=>{
    console.log(`port listen`);
})
