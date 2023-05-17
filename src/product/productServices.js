const Product = require("./productSchema")
/* add Product  */
/* api for admin  */
exports.addProductServices=async(data)=>{
    const result=await Product.create(data)
    return result;
}
exports.addProductsServices=async(data)=>{
    const result=await Product.insertMany(data)
    return result;
}

exports.getAdminProductService=async(filter)=>{
    const res=await Product.find(filter)
    return res
}
exports.adminDeleteProductService=async(id)=>{
    const res=await Product.findByIdAndDelete(id);
    return res
}
/* ===========api for customer */
exports.getProductsServices=async(filter,query)=>{
    const result=await Product.find(filter).select(query.fields).limit(10).skip(query.skip)
    return result;
}

exports.getProductByIdService=async(id)=>{
    const result=await Product.findById(id)
    return result
}


exports.changeStockService=async(id)=>{
    console.log(id);
    const res=await Product.findByIdAndUpdate(id,{$inc:{stock:-1}})
    return res

}