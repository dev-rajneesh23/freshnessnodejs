const express = require('express');
const usercontroller = require("../controller/bakery_controller");
const bakery_router = express.Router();
bakery_router.post("/bakery-data",usercontroller.add_user);
bakery_router.get("/bakerydata",usercontroller.users);
bakery_router.get("/bakerydetails/:id",usercontroller.usersDetail);
bakery_router.put("/update/:id",usercontroller.update )
bakery_router.delete("/delete/:id",usercontroller.delete );
bakery_router.delete("/delete",usercontroller.deleteall );

module.exports = bakery_router;