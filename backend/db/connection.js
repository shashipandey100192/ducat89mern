const mongoose = require('mongoose');

const db = "mongodb+srv://mernuser:supperpassword@cluster0.cqczybv.mongodb.net/mydatabase";

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));