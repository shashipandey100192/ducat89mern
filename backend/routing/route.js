'Access-Control-Allow-Origin'
const express = require('express');
const route = express.Router();
const mypatt = require('../schimapattern/schima');


route.get("/getdata",async(req,res)=>{
    const alldata = await mypatt.find();
    res.json(alldata);
    console.log(alldata);
});


module.exports = route
