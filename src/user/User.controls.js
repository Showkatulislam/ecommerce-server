const { addUserService, getUserService } = require("./User.Services")

exports.addUser=async(req,res)=>{
    try {
        const result=await addUserService(req.body)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(500).json({status:'fail',data:error.message})
        
    }
}
exports.getUser=async(req,res)=>{
    try {
        console.log(req.query);
        const result=await getUserService(req.query)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(500).json({status:'fail',data:error.message})
        
    }
}