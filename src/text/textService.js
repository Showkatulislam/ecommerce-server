const Text = require("./textmodel");


exports.addTextService=async(data)=>{
    console.log(data);
    const res=await Text.create(data)
    return res;
}
exports.getTextService=async()=>{
    const res=await Text.find({})
    return res;
}
exports.upDateTextService=async(data,filter)=>{
    console.log(data);
    const updatDoc={
        $push:{order:{$each:data}},
    }
    const res=await Text.updateOne(filter,updatDoc)
    return res;
}
/* const updateDoc = {
    $push: { orders: { $each:data.data } },
  }; */