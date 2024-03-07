//User Controler
const { Tokengenreter } = require("../config/JwtToken");
const User = require("../models/user/userModel");
const Managedryaddress = require("../models/user/UsermanageDlvryAddress");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.Email;
        const findUser = await User.findOne({ Email: email });
        if (!findUser) {
            const newuser = await User.create(req.body);
            res.json(newuser);
            console.log(newuser)
        }
        else {
            // throw new Error("User Alraddy exixst");
            res.send("already exist")
        }
    });

const loginUserCtrl = asyncHandler(
    async (req, res) => {
        const { Email, Password } = req.body;
        //console.log(Email, Password);

        const finduser = await User.findOne({ Email });
        // res.send(finduser);
        // console.log(finduser)
        if (finduser && (await finduser.isPasswordMatched(Password))) {
            //  res.json(finduser);
            res.json({
                _id: finduser?._id,
                Name: finduser?.Name,
                LastName: finduser?.LastName,
                Email: finduser?.Email,
                Address: finduser?.Address,
                token: Tokengenreter(

                    finduser?.id,
                    finduser?.Name,
                    finduser?.Email
                )
            });

        }
        else {
            throw new Error("Invalid Credentials");
        }
    });

const getalluser = asyncHandler(
    async (req, res) => {
        try {
            const getuser = await User.find();
            res.json(getuser);
        }
        catch (error) {
            throw new Error(error);
        }
    });

const getauser = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        try {
            const getauser = await User.findById(id);
            res.json({
                getauser,
            })
        }
        catch (error) {
            throw new Error(error);
        }
    });

const getauserdelete = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        try {
            const getauserdelete = await User.findByIdAndDelete(id);
            res.json({
                getauserdelete,
            })
        }
        catch (error) {
            throw new Error(error);
        }
    });
const getauserupdated = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        try {
            const getauserupdated = await User.findByIdAndUpdate(id, {
                Name: req?.body?.Name,
                LastName: req?.body?.LastName,
                Email: req?.body?.Email,
                Password: req?.body?.Password,
                Address: req?.body?.Address,
            },
                {
                    New: true,
                }
            );
            res.json(getauserupdated)
        }
        catch (error) {
            throw new Error(error);
        }
    });

const ManageAddress = (req, res) => {
    const mymanageaddress = new Managedryaddress(req.body);
    console.log(mymanageaddress);
    mymanageaddress.save();

    res.send("data seccufull seva");
}


module.exports = {

    createUser, loginUserCtrl, getalluser, getauser, getauserdelete, getauserupdated, ManageAddress

};