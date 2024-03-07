const mongoose=require("mongoose");
const myCouponSchema=new mongoose.Schema({
    Coupon_Name: {
         type: String,
         required: true
 },
    Discount: {
         type: String,
         required: true
 },
    Expiry_Date: {
         type: String,
         required: true
 },

})
module.exports= mongoose.model("coupon", myCouponSchema)  //