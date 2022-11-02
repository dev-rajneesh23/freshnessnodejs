const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/router");
const bakery_router= require("./router/bekery_router");
const bodyParser = require('body-parser');
const cloudinary = require("cloudinary").v2;
const fileupload =require("express-fileupload");

   
const port = process.env.PORT || 4000;
const app = express();
mongoose.connect("mongodb+srv://rajneeshsanodiya:rajneesh@cluster0.u16vgkt.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>{
    console.log("database conected")
}).catch((err)=>{
    console.log("error")
});
app.use(fileupload({
    useTempFiles:true
}))

const cors  = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use("/user",router);
app.use("/bakery",bakery_router)



app.listen(port, ()=>{
     console.log(`server is runing on the port no:  ${port}`);
});

