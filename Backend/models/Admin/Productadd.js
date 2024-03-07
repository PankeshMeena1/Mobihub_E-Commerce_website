const mongoose = require('mongoose');

const AdminMySchema = new mongoose.Schema({
   
    Product_Name:{
        type:String,
        required:true
     },
     Product_Price:{
        type:String,
        required:true
     },
     Product_Regular_Price:{
        type:String,
        required:true
     },
     Product_Brand:{
        type:String,
        required:true
     },
     Product_RAM:{
        type:String,
        required:true
     },
     Product_ROM:{
        type:String,
        required:true
     },
     Image_URL:{
        type:Array,
        required:true
     }
});

module.exports=mongoose.model("myadmin",AdminMySchema);

