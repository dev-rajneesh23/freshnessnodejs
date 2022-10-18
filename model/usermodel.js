const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    Product_title:{
        type:String
    },
    Product_Image:{
        type:String
    },
    Product_discription:{
        type:String
    },
    Product_rating:{
        type:Number
    },
    Freshness:{
        type:String
    },
    Farm:{
        type:String
    },
    Delivery:{
        type:String
    },
    Stock:{
        type:String
    },
    Product_price:{
        type:String
    }
})
module.exports = mongoose.model("Users",schema);
