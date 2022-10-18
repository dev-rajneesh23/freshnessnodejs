const express = require('express');
const usercontroller = require("../controller/usercontroller");
const router = express.Router();
router.post("/user-data",usercontroller.add_user);
router.get("/userdata",usercontroller.users);

module.exports = router;