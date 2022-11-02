const userModel = require("../model/usermodel");

exports.add_user = (request,res)=>{
    console.log(request)
    userModel.create({
        title:request.body.title,
        image:request.body.image,
        discription:request.body.discription,
        rating:request.body.rating,
        freshness:request.body.freshness,
        farm:request.body.farm,
        delivery:request.body.delivery,
        stock:request.body.stock,
        price:request.body.price
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
         
        if(result.acknowledged==true){
            return res.status(201).json({message:"all data has been deleted"})
        }
        else{
            return res.status(500).json({message:"not deleted"})
        }
    }).catch(error=>{
        return res.status(500).json(error)
    })
    
}