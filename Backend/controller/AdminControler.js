const AdminModel = require("../models/Admin/Productadd");
const BrandModel= require("../models/Admin/Brand");
const CouponModel = require("../models/Admin/Coupon");

const ProductAdd = (req, res) => {
    const myproduct = new AdminModel(req.body);
    console.log(myproduct);
    myproduct.save();

    res.send("data seccufull seva");
    // console.log(myproduct);
}

// API for display all product 

const DisplayProduct = async (req, res) => {
    try {
        const products = await AdminModel.find();
        res.send(products);
        // console.log(products);
        console.log("all product send by displayproduct api")
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// API for delete item from database 

const DeleteProduct = async (req, res) => {

    const delId = req.params.id
    let respo = await AdminModel.deleteOne({ _id: delId })
    // console.log(respo)
    console.log("delete")
}

const BrandController=async(req,res)=>{
   const brand=await BrandModel.create(req.body)
   res.status(201).json(brand)
}
const CouponControler =async(req,res)=>{
   const brand=await CouponModel.create(req.body)
   res.status(201).json(brand)
}


module.exports = { ProductAdd, DisplayProduct, DeleteProduct,BrandController,CouponControler };