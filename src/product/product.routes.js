const express = require('express');
const { addProduct, addProducts, getProducts, getProductById, changeStock, getAdminProduct, adminDeleteProduct } = require('./productControls');


const productRouter=express.Router()


productRouter.route('/product/:id')
.get(getProductById)//customer detail
.put(changeStock)//change stock 
.delete(adminDeleteProduct)

productRouter.route('/product')
.post(addProduct)
.get(getAdminProduct)

productRouter.route('/products')
.post(addProducts)
.get(getProducts)

module.exports=productRouter