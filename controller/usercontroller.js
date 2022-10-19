
const usermodel = require("../model/usermodel");
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


exports.usersDetail = (request,response)=>{
    debugger;
    userModel.findOne({_id:request.params.id}).then(result=>{
        return response.status(200).json(result);
    }).catch(error=>{
        return response.status(500).json(error);
    })
}

exports.update = (request,res)=>{
    userModel.updateOne({_id:request.params.id},
        {
           $set : request.body
        }).then(result=>{
            if(result.acknowledged==1){
                return res.status(201).json({message:"data has been updated"});
            }
            else{
                return res.status(500).json({message:"data has been not updated "})
            }
        }).catch(err=>{
            return res.status(500).json(err);
        })
        
}

exports.delete = (req,res)=>{
    userModel.deleteOne({_id:req.params.id}).then(result=>{
        if(result.acknowledged==true){
            return res.status(201).json({message:"data has been deleted"})
        }
        else{
            return res.status(500).json({message:"not deleted"})
        }
    }).catch(err=>{
        return res.status(500).json({err})
    })
}

exports.deleteall= (req,res)=>{
    userModel.deleteMany(res).then(result=>{
        
        if(result.send()==true){
            return res.status(201).json({message:"data has been deleted"})
        }
        else{
            return res.status(500).json({message:"not deleted"})
        }
    }).catch(err=>{
        return res.status(500).json({err})
    })
    
}