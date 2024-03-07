const mongoose = require('mongoose');

const ManageAddresSchema = new mongoose.Schema({
    
    User_Name: {
        type: String,
        required: true

    },
    User_Mobile_Number: {
        type: String,
        required: true
    },
    User_Pincode: {
        type: String,
        required: true

    },
    User_Locality: {
        type: String,
        required: true

    },
    User_Address: {
        type: String,
        required: true

    },
    User_City: {
        type: String,
        required: true

    },
    User_Landmark: {
        type: String,
        required: true

    },
    User_Country: {
        type: String,
        required: true

    }
    
});


module.exports = mongoose.model('Managedryaddress', ManageAddresSchema);