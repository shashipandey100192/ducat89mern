const express = require('express');
require('dotenv').config();

const port = process.env.port || 4000;
const myapp = express();

myapp.get("/",(req,res)=>{
    res.send("welcome to express js");
})



myapp.listen(port,()=>{
    console.log(`server is running ${port}`);

})

