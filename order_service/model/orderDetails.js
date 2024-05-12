import mongoose from "mongoose";

const Schema = mongoose.Schema;
const orderDetailsSchema = new Schema({
  productId: {
    type: String,
  },
  quantity:{type:Number}
});

const orderDetailsModel = mongoose.model("orderDetail", orderDetailsSchema);

export default orderDetailsModel;