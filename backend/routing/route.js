'Access-Control-Allow-Origin'
const express = require('express');
const route = express.Router();
const mypatt = require('../schimapattern/schima');


route.get("/getdata",async(req,res)=>{
    const alldata = await mypatt.find();
    res.json(alldata);
    console.log(alldata);
});


// post / create  api
route.post("/create",async(req,res)=>{
    const {name,email,phone,city,gender,pass} = req.body;
    const adduser = new mypatt({
        name,email,phone,city,gender,pass
    });
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser);
});








module.exports = route
