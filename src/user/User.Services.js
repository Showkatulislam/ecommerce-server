const User = require("./user.model")

exports.addUserService=async(data)=>{
    const result=await User.create(data)
    return result;
}
exports.getUserService=async(data)=>{
    console.log(data);
    const result=await User.findOne(data)
    return result;
}