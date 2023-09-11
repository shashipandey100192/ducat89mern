const mongoose = require('mongoose');

const Myschima = mongoose.Schema({
    username:{
        type:String  
    }

});
const mypattern = new mongoose.model("mean45",Myschima);
module.exports = mypattern;