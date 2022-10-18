const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/router");
const bodyParser = require('body-parser');

   
const port = process.env.PORT || 3000;
const app = express();
mongoose.connect("mongodb+srv://rajneeshsanodiya:rajneesh@cluster0.u16vgkt.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>{
    console.log("database conected")
}).catch((err)=>{
    console.log("error")
});
const cors  = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use("/user",router);

app.listen(port, ()=>{
     console.log(`server is runing on the port no:  ${port}`);
});

