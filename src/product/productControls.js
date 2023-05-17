const { json } = require("express")
const { addProductServices, addProductsServices, getProductsServices, getProductByIdService, changeStockService, getAdminProductService, adminDeleteProductService } = require("./productServices")
/* add Product  */
/* api for admin  */
exports.addProduct=async(req,res)=>{
    try {
        const result=await addProductServices(req.body)
        res.status(200).json({'status':'success',data:result})
    } catch (error) {
        res.status(200).json({'status':'fail',"message":error.message})
    }
}
exports.addProducts=async(req,res)=>{
    try {
        const result=await addProductsServices(req.body)
        res.status(200).json({'status':'success',data:result})
    } catch (error) {
        res.status(200).json({'status':'fail',"message":error.message})
    }
}

exports.getAdminProduct=async(req,res)=>{
    try {
        console.log(req.query);
        const result=await getAdminProductService(req.query)
        res.status(200).json({'status':'success',data:result})
    } catch (error) {
        res.status(200).json({'status':'fail',"message":error.message})
    }
}

exports.adminDeleteProduct=async(req,res)=>{
    try {
        console.log(req.params.id);
        const result=await adminDeleteProductService(req.params.id)
        res.status(200).json({'status':'success',data:result})
    } catch (error) {
        res.status(200).json({'status':'fail',"message":error.message})
    }
}



/* ===========api for customer */
/* ===========api for customer by category and pagination */
exports.getProducts=async(req,res)=>{
    try {
        let filter={...req.query}
        const queries={}
        const excludeFields=['limit','page','sort','fields']
        excludeFields.forEach(field=>{delete filter[field]})
        let jsonFilter=JSON.stringify(filter)
        jsonFilter=jsonFilter.replace(/\b(gt|gte)\b/g,match=>`$${match}`)
        filter=JSON.parse(jsonFilter)

        if(req.query.sort){
           const sortBy=req.query.sort.split(',').join(' ')
          queries.sortBy=sortBy
        }
        if(req.query.fields){
            const fields=req.query.fields.split(',').join(' ');
            queries.fields=fields
        }
        if(req.query.page){
            const {page=1,limit=10}=req.query
            const skip=(page-1)*parseInt(limit)
            queries.skip=skip
        }
        const result=await getProductsServices(filter,queries)
        res.status(200).json({'status':'success',data:result})
    } catch (error) {
        res.status(200).json({'status':'fail',"message":error.message})
    }
}
exports.getProductById=async(req,res)=>{
    try {
        const result=await getProductByIdService(req.params.id)
        res.status(200).json({'status':'success',data:result})
    } catch (error) {
        res.status(200).json({'status':'fail',"message":error.message})
    }
}
exports.changeStock=async(req,res)=>{
    try {
        const result=await changeStockService(req.params.id)
        res.status(200).json({'status':'success',data:result})
    } catch (error) {
        res.status(200).json({'status':'fail',"message":error.message})
    }
}