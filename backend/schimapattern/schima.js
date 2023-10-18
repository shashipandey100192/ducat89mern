const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keysecret = "sjkdfksjkjfksjdkfdsksdfjsjkhfjsdghfjfhsdjf";

const myschima = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    gender:{
        type:String
    },
    city:{
        type:String
    },
    pass:{
        type:String
    },
    tokens:[
        {
            token:{
                type:String,
                require:true,
            }
        }
    ]

});

//hass password
myschima.pre("save", async function(next){
    if(this.isModified("pass")){
        this.pass = await bcrypt.hash(this.pass,12);
    }
    next();
});

myschima.methods.customgeenratefunction = async function(){
    try{
        let mytoken = jwt.sign({_id:this._id},keysecret,{
            expiresIn:"1d"
        });
        this.tokens = this.tokens.concat({token:mytoken});
        await this.save();
            return mytoken;

    }
    catch(error){
        res.statis(422).json(error);
    }

}



const mypattern = new mongoose.model("problem",myschima);
module.exports = mypattern;