
const userModel = require("../model/usermodel");

exports.add_user = (request,res)=>{
    console.log(request)
    userModel.create({
        Product_title:request.body.Product_title,
        Product_Image:request.body.Product_Image,
        Product_discription:request.body.Product_discription,
        Product_rating:request.body.Product_rating,
        Freshness:request.body.Freshness,
        Farm:request.body.Farm,
        Delivery:request.body.Delivery,
        Stock:request.body.Stock,
        Product_price:request.body.Product_price
    }).then(result=>{
        console.log(result);
        return res.status(201).json(result);
    }).catch(err=>{
        return res.status(500).json(err);
    })
}

exports.users = (request,response)=>{
    userModel.find().then(result=>{
        return response.status(200).json(result);
    }).catch(error=>{
        return response.status(500).json(error)
    })
}
