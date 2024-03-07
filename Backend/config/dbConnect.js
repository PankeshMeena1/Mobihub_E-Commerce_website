const  mongoose  = require("mongoose");

const dbConnect = () => {
     mongoose.connect(process.env.MONGOODB_URL).then(()=>console.log("database connected")).
    catch((err)=>console.log("databse error", err));
};
module.exports = dbConnect;