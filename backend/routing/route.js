const express = require('express');
const route = express.Router();
const mypatt = require('../schimapattern/schima');

route.get('/',(req,res)=>{
    res.send("welcome to express js");
})

route.get("/getdata",async(req,res)=>{
    const allusers = await mypatt.find();
    res.json(allusers);
    console.log(allusers);
});


module.exports = route
