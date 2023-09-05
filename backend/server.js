const express = require('express');
require('dotenv').config();

const port = process.env.port || 4000;
const myapp = express();

myapp.get("/",(req,res)=>{
    res.send("welcome to express js");
})

myapp.get("/about",(req,res)=>{
    res.send(`<h1>this is about page</h1>`);
})






myapp.listen(port,()=>{
    console.log(`server is running ${port}`);

})

