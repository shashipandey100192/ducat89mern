'Access-Control-Allow-Origin'
const express = require('express');
const route = express.Router();
const mypatt = require('../schimapattern/schima');
const bcrypt = require("bcryptjs");
const authenticat = require("../medialware/Medialware");


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


// get single data api
route.get("/view/:id",async(req,res)=>{
    const {id} = req.params;
    const singleuser = await mypatt.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);
});

// delete api
route.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await mypatt.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});


// update api
route.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await mypatt.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});


/*login api */
// route.post("/login", async(req,res)=>{
//     console.log(req.body);
//     const {email,pass} = req.body;
      
//     if(!email || !pass){
//         return res.status(422).json({error:"user and phone no dont match"});
       
//     }
//     else{
//         const uservalidation = await mypatt.findOne({email:email});
//         console.log(uservalidation);
//         if(uservalidation.email===email && uservalidation.pass===pass)
//         {
//             res.status(200).json({message:'welcome',status: 201}); 
//         }
//         else{
//             res.status(250).json({error:"password not match"});
//         }
//     }
// });


route.post("/login", async(req,res)=>{
    console.log(req.body);
    const {email,pass} = req.body;
      
    if(!email || !pass){
        return res.status(422).json({error:"user and password dont match"});
       
    }
    try{
        const uservalidation = await mypatt.findOne({email:email});
        if(uservalidation){
            const mathdata = await bcrypt.compare(pass,uservalidation.pass);
            console.log(mathdata);
            if(!mathdata){
                res.status(422).json({error:"password not match"});
            }else{
                //token generate after successful find data
                    const token = await uservalidation.customgeenratefunction();
                // cookies generate
                    res.cookie("usecookie",token,{
                        expires:new Date(Date.now()+9000000),
                        httpOnly:true
                    });
                    const result = {
                        uservalidation,
                        token
                    }
                    return res.status(201).json({status:201,result});
                    
            }
        }
    } catch(error)
    {}
    
});



// user validation
route.get("/validuser",authenticat,async(req,res)=>{
    // console.log("show this message after done authenticat varification");
    try{
        const firsttimevalid = await mypatt.findOne({_id:req.userId});
        res.status(201).json({status:201,firsttimevalid});
    }
    catch(error)
    {
        res.status(401).json({status:401,error})
    }


});





module.exports = route
