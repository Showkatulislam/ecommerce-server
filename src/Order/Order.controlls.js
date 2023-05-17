const {
  addOrderService,
  getOrderService,
  deleteOrderService,
  createOrderServices,
  getOrderByUserService,
  deletev2OrderService,
  changeStatusByIdService,
} = require("./Order.service");

exports.addOrder = async (req, res) => {
  console.log("add",req.body);
  try {
    const result = await addOrderService(req.query, req.body);
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const result = await getOrderService(req.query);
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.PostOrder = async (req, res) => {
  try {
    const result = "a ama dldldlld";
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  console.log("delete", req.query, req.body);
  try {
    const result = await deleteOrderService(req.query, req.body);
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
/* that all new api for order  */
exports.createOrders=async(req,res)=>{
  try {
    console.log('creat',req.body);
    const result = await createOrderServices(req.body)
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
exports.getOrderByUser=async(req,res)=>{
  try {
    const result = await getOrderByUserService(req.query)
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.deletev2Order=async(req,res)=>{
  try {
    console.log(req.query);
    const result = await deletev2OrderService(req.query)
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
/* ==============this api change status by id ======= */

exports.changeStatusById=async(req,res)=>{
  try {
    console.log('const',req.query,req.body);
    const result = await changeStatusByIdService(req.query,req.body)
    res.status(200).json({status:'change status', result: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}