const express = require('express');
const myapp = express();
require('dotenv').config();
let port = process.env.port || 8080;
const cors = require('cors');
require('./db/connection');
const route = require('./routing/route');


myapp.get("/",(req,res)=>{
    res.send("welcome to express js res full  api");
})






myapp.use(express.json());
myapp.use(cors());
myapp.use(route);



myapp.listen(port,()=>{
    console.log(`server is runing at: ${port}`);
})