const { default: mongoose } = require("mongoose");

const textSchema=mongoose.Schema({
    name:{
        type:String,
    },
    order:[{
        id:{
            type:mongoose.Types.ObjectId,
            ref:'Product'
        },
        quantity:{
            type:Number
        }
    }]
})

const Text=mongoose.model("Text",textSchema)

module.exports=Text