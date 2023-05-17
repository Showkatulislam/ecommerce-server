const { default: mongoose } = require("mongoose");

const orderSchema=mongoose.Schema({
    product_id:{
        type:mongoose.Types.ObjectId,
        unique: true,
        ref:'Product'
    },
    email:{
        type:String
    },
    seller:{
        type:String
    },
    quantity:{
        type:Number
    },status:{
        type:String,
        default:'pendding',
        enum:{
            values:["pendding",'shipping','delivery'],
            messages:'{VALUES} WILL BE THAT TYPE'
        }
    }
})

const Order=mongoose.model('Order',orderSchema)

module.exports=Order