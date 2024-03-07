const mongoose=require("mongoose");
const mybrandSchema=new mongoose.Schema({
    Brand_Name: {
         type: String,
         required: true
 },
    Parent_Category: {
         type: String,
         required: true
 },

})


module.exports= mongoose.model( "Brand",mybrandSchema)  //