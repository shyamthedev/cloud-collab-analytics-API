const express=require('express');
var app=express();
var port=process.env.port || 3000;
require('./db/mongoose');


app.listen(port,()=>{
    console.log(`port listen`);
})
console.log('hlooo');

console.log("abssssssssssssssssssss");
