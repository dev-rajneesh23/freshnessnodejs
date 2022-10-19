const express = require('express');
const usercontroller = require("../controller/usercontroller");
const router = express.Router();
router.post("/user-data",usercontroller.add_user);
router.get("/userdata",usercontroller.users);
router.get("/userdetails/:id",usercontroller.usersDetail);
router.put("/update/:id",usercontroller.update )
router.delete("/delete/:id",usercontroller.delete );
router.delete("/delete",usercontroller.deleteall );

module.exports = router;