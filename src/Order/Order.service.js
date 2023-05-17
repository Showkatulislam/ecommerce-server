const { query } = require("express");
const User = require("../user/user.model");
const Order = require("./orderModel");

exports.addOrderService = async (filter, data) => {
  const updateDoc = {
    $push: { orders: { $each: data } },
  };
  const result = await User.updateOne(filter, updateDoc);
  return result;
};

exports.getOrderService = async (data) => {
  const orders = await User.findOne(data).populate("orders.id");
  return orders;
};

exports.deleteOrderService = async (email, id) => {
  console.log(id);
  const mydata = await User.findOne(email);
  const tempdata = mydata.orders;
  const orders = tempdata.filter((order) => order.order_id !== id.id);
  mydata.orders = orders;
  mydata.save();
  return mydata;
};



/* ===========that all new api for order v2========== */


/* ==========created by showkatul=================== */

/* customer */
exports.createOrderServices=async({data})=>{
    const res=await Order.insertMany(data);
    return res;
}

exports.deletev2OrderService=async(query)=>{
  console.log(query);
  const res=await Order.findOneAndDelete(query)
  return res
}

/* admin */
/* ==============this api change status by id ======= */

exports.changeStatusByIdService=async(id,status)=>{
  console.log(id,status)
  const res=await Order.updateOne(id,status);
  return res;
}
/* =========find Admin and custormer Order from user */
exports.getOrderByUserService=async(filter)=>{
  const result=await Order.find(filter).populate('product_id')
  return result
}