const express = require('express');
require('dotenv').config();
require('./db/connection');
const route = require('./routing/route');

const port = process.env.port || 4000;
const myapp = express();




myapp.use(route);



myapp.listen(port,()=>{
    console.log(`server is running ${port}`);

})

