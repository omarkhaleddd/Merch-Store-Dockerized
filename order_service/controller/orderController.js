import mongoose from "mongoose";
import OrderModel from "../model/order.js";
import OrderDetailsModel from "../model/orderDetails.js";

export const getOrders = async (req, res) => {
  try {
    const Orders = await OrderModel.find();
    res.status(200).json(Orders);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
export const getOrder = async (req, res) => {
  try {
    const userID = req.params.id;
    const Order = await OrderModel.findOne({ userID })
    if (Order) {
      res.status(200).json(Order);
    } else res.status(404).json({ message: "Not Found" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
export const addOrder = async (req, res) => {
  try {
    const { userID, products } = req.body;
    const orderDetails = [];
    const user = await OrderModel.findOne({ userID })
    console.log(user);
    if(user){
        return res.status(404).json({ message: "user already have cart" });
    }
    for (const productId of products) {
        
      const orderDetail = new OrderDetailsModel({
        product: productId,
      });
      orderDetails.push(orderDetail);
    }

    const newOrder = new OrderModel({
      userID: userID,
      orderDetails,
    });
    
    const savedOrder = await newOrder.save();
    for (const orderDetail of orderDetails) {
      await orderDetail.save();
    }

    res.status(201).json({ message: 'Order created successfully', order: savedOrder });

  } catch (error) {
    res.status(404).json({ message: "catch error" });
  }
};
// Delete Order API
export const deleteOrder = async (req, res) => {
    try {
      const  orderId  = req.params.id;
      // Check if the orderId is valid
      if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({ error: "Invalid order ID" });
      }
  
      // Check if the order exists
      const existingOrder = await OrderModel.findById(orderId);
      if (!existingOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
  
      // Delete associated order details first
      for (const orderDetailId of existingOrder.orderDetails) {
        await OrderDetailsModel.findByIdAndDelete(orderDetailId);
      }
  
      // Delete the order itself
      await OrderModel.findByIdAndDelete(orderId);
  
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  