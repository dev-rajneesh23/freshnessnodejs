const { request } = require('express');
const express = require('express');
const usercontroller = require("../controller/usercontroller");
const usermodel = require('../model/usermodel');
const router = express.Router();
const cloudinary = require("cloudinary").v2;

// cloudinary configuration
cloudinary.config({
    cloud_name: "dbmwuiw20",
    api_key: "193127782551574",
    api_secret: "wDScotUw6HIzYsggWek2eh2T4Gc"
});
router.post("/user-data",usercontroller.add_user);

router.get("/userdata",usercontroller.users);
router.get("/userdetails/:id",usercontroller.usersDetail);
router.put("/update/:id",usercontroller.update )
router.delete("/delete/:id",usercontroller.delete );
router.delete("/delete",usercontroller.deleteall );
router.post("/add-category", usercontroller.addcategory);
router.get("/view-category-list", usercontroller.viewCategory);
router.get("/bakery/:category",usercontroller.bakery_item)
// router.post("/uploadimg", uploader.single("file"), async (req, res) => {
//       const upload = await cloudinary.v2.uploader.upload(req.file.path);
//       return res.json({
//         success: true,
//         file: upload.secure_url,
//       });
//     });
    
    
    
    
    

module.exports = router;