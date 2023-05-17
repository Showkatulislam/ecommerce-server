//#region imported file
const express = require('express');
const cors = require('cors');
const productRouter = require('../src/product/product.routes');
const userRoutes = require('../src/user/User.routes');
const OrderRoute = require('../src/Order/Order.routes');
const textRoute = require('../src/text/text.Routes');


//#region initialize app
const app=express()
//#region setup middleware
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json("Welcome to you our sit")
})

app.use("/api",productRouter)
app.use("/api",userRoutes)
app.use("/api",OrderRoute)
app.use("/api",textRoute)

app.get('*',(req,res)=>{
    res.json("Provided Url forbiden!")
})

module.exports=app