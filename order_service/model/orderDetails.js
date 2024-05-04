import mongoose from "mongoose";

const Schema = mongoose.Schema;
const orderDetailsSchema = new Schema({
  productId: {
    type: String,
  }
});

const orderDetailsModel = mongoose.model("orderDetail", orderDetailsSchema);

export default orderDetailsModel;