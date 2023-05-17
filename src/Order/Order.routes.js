const express = require('express');
const { addOrder, getOrder, PostOrder, deleteOrder, createOrders, getOrderByUser, deletev2Order, changeStatusById } = require('./Order.controlls');

const OrderRoute=express.Router()

OrderRoute.route('/order')
.get(getOrder)
.put(addOrder)
.post(PostOrder)
OrderRoute.route('/order-delete')
.put(deleteOrder)
OrderRoute.route('/order/v1')
.post(createOrders)
.get(getOrderByUser)
.delete(deletev2Order)
.put(changeStatusById)

module.exports=OrderRoute