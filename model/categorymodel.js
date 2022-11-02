const mongoose = require("mongoose");
const categoryschema = new mongoose.Schema({
   categoryname:{
    type:String
   },
   categoryimage:{
    type:String
   }
 } ,{ timestamps: true });
   module.exports = mongoose.model("categories", categoryschema);
