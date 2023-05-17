const { addTextService, getTextService, upDateTextService } = require("./textService")

exports.addText=async(req,res)=>{
    try {
        const result=await addTextService(req.body);
        res.status(200).json({send:'data added',result:result})
    } catch (error) {
        res.status(500).json({send:'data not add',result:error.message})
    }
}
exports.getText=async(req,res)=>{
    try {
        const result=await getTextService();
        res.status(200).json({send:'data added',result:result})
    } catch (error) {
        res.status(500).json({send:'data not add',result:error.message})
    }
}
exports.upDateText=async(req,res)=>{
    try {
        console.log(req.query);
        const result=await upDateTextService(req.body,req.query);
        res.status(200).json({send:'data added',result:result})
    } catch (error) {
        res.status(500).json({send:'data not add',result:error.message})
    }
}