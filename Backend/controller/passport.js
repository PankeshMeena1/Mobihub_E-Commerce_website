// const passport = require ("../config/passwordconfig");
const userdb = require("../models/user/loginwithgogl");

const getUserData = async (req, res) => {
    try {
        const userData = await userdb.findOne({ googleId: req.user.googleId });
        res.status(200).json(userData);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports={
    getUserData,
}


