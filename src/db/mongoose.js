const mongoose=require('mongoose');
const url='mongodb+srv://bhanu:z1Q6aM46qkhca2wY@cluster0.vg4ew.mongodb.net/task-manager?retryWrites=true&w=majority'

mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true},(error,res)=>{
    if(!error){
        console.log('db connected');
    }
})

module.exports=mongoose;