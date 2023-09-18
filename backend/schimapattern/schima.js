const mongoose = require('mongoose');

const myschima = new mongoose.Schema({
    username:{
        type:String  
    }

});

const mypattern = new mongoose.model("problem",myschima);
module.exports = mypattern;