import React, { useState } from "react";
import axios from "axios";

const Addproduct_Admin = () => {
    const [input, setInput] = useState({});
    const [uploadFiles, setUploadFiles] = useState([]);
    const [cloudinaryPaths, setCloudinaryPaths] = useState([]);

    // handle images
    const handleFileChange = (e) => {
        const files = e.target.files;
        const imagesArray = Array.from(files);

        if (imagesArray.length !== 4) {
            // Display an alert if the number of selected files is not exactly 4
            alert('Please select exactly 4 photos.');
            // Clear the file input to reset the selection
            e.target.value = null;
        } else {
            // Set the state with the selected files
            setUploadFiles(imagesArray);
        }
    };


    //  handle inputs 
    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    };


    const handleUploadImages = async () => {
        try {
            const uploadedPaths = await Promise.all(
                uploadFiles.map(async (file) => {
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append("upload_preset", "ofkoxtub");
                    formData.append("cloud_name", "dq1yrqhsl");
                    // Replace with your Cloudinary upload preset

                    const response = await axios.post(
                        "https://api.cloudinary.com/v1_1/dq1yrqhsl/image/upload/",
                        formData
                    );

                    return response.data.secure_url;
                })
            );

            setCloudinaryPaths(uploadedPaths);
            console.log(uploadedPaths)
        }
        catch (error) {
            console.error('Error uploading to Cloudinary:', error);
        }
    };

    /////////////////////////////////////////////////////////
    const handleAddProduct = async () => {

        const productDetails = {
            ...input,
            Image_URL: cloudinaryPaths,
        };


        try {
            // Send productDetails to your backend API for further processing
            console.log("Product details:", productDetails);

            const responseapi = await axios.post("http://localhost:5000/api/user/ProdoctAdd", productDetails);
            console.log(responseapi);
            console.log("send detail of product successful !@!")
            setInput({});
            setCloudinaryPaths([])

        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };
    /////////////////////////////////////////////////


    return (

        <div className="AddProductForm">
            <div className="Upload_img_main_div">
                <h1>Add Product</h1>

                <div className="img_div">

                    <div>
                        <input
                            className="file_upload"
                            type="file"
                            onChange={handleFileChange}
                            multiple
                        />
                        <h3>Click to upload up to images</h3>
                    </div>
                </div>
                <center><button onClick={handleUploadImages}>Upload Images</button></center>

                <div className="sec_box_img">
                    
                    {
                        cloudinaryPaths.map((item) =>
                            <div>
                                <img src={item} alt="" />
                            </div>
                        )
                    }
                </div>

                <div className="Input_div_start">
                    <h2>Add Products</h2>
                    <div className="Input_div_start_box">
                        <div className="input-container">
                            <label className="form-label">Enter Product Name :</label>
                            <input
                                className="form-input"
                                type="text"
                                name="Product_Name"
                                value={input.Product_Name || ""}
                                onChange={inputHandle}
                            />
                        </div>

                        <div className="input-container">
                            <label className="form-label">Enter Product Price :</label>
                            <input
                                className="form-input"
                                type="text"
                                name="Product_Price"
                                value={input.Product_Price || ""}
                                onChange={inputHandle}
                            />
                        </div>

                        <div className="input-container">
                            <label className="form-label">Enter Regular price :</label>
                            <input
                                className="form-input"
                                type="text"
                                name="Product_Regular_Price"
                                value={input.Product_Regular_Price || ""}
                                onChange={inputHandle}
                            />
                        </div>

                        <div>

                            <label className="form-label">Choose RAM:</label>
                            <select
                                className="form-input"
                                name="Product_RAM"
                                value={input.Product_RAM || ""}
                                onChange={inputHandle}
                            >
                                <option value="">Select RAM</option>
                                <option value="4GB">4GB</option>
                                <option value="8GB">8GB</option>
                                <option value="16GB">16GB</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div className="input-container">
                            <label className="form-label">Choose ROM:</label>
                            <select
                                className="form-input"
                                name="Product_ROM"
                                value={input.Product_ROM || ""}
                                onChange={inputHandle}
                            >
                                <option value="">Select ROM</option>
                                <option value="32GB">32GB</option>
                                <option value="64GB">64GB</option>
                                <option value="128GB">128GB</option>
                                <option value="256GB">256GB</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div className="input-container">
                            <label className="form-label">Choose Brand:</label>
                            <select
                                className="form-input"
                                name="Product_Brand"
                                value={input.Product_Brand || ""}
                                onChange={inputHandle}
                            >
                                <option value="">Select Brand</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Apple">Apple</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Redmi">Redmi</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <button className="registration-btn" onClick={handleAddProduct}>
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addproduct_Admin;
