const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new mongoose.Schema({
    title:{
        type:String
    },
    image:{
        type:String
    },
    discription:{
        type:String
    },
    rating:{
        type:Number
    },
    freshness:{
        type:String
    },
    farm:{
        type:String
    },
    delivery:{
        type:String
    },
    stock:{
        type:String
    },
    price:{
        type:String
    },
    category: {
        type: String,
        
    },
 
 
  
})
module.exports = mongoose.model("Users",schema);
