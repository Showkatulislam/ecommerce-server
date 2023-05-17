const { default: mongoose } = require("mongoose");

const productSchema=mongoose.Schema({
    name:{
        type:String,
        trime:true,
        required:true
    },
    category:{
        type:String
    },seller:{
        type:String
    },price:{
        type:Number,
        min:[0,'price is positive']
    },stock:{
        type:Number,
        min:[0,'stock should be positive']
    },
    ratingsCount:{
        type:Number,
        min:[0,'Ratings Count is positive']
    },
    img:{
        type:String
    }
},{timestamps:true})

const Product=mongoose.model("Product",productSchema)
module.exports=Product