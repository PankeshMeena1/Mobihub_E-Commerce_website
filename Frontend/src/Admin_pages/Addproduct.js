import { useState } from "react";
import All_pages_option from "./Admin_components/All_pages_option";
import axios from "axios";
const AddProduct = () => {

    const [input, setinput] = useState({});
    // const [imgurl ,setimgurl]= useState({})

    // handle images upload 
    const [uploadFiles, setUploadFiles] = useState([]);
    const handleFileChange = (e) => {
        const myfile = e.target.files;
        setUploadFiles(myfile);
    };

    // handle input of the form 

    const inputhandle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setinput((values) => ({ ...values, [name]: value }));
    }

    // handleAddProduct function for add the product

    const handleAddProduct = async () => {

        const formdata = new FormData();
        formdata.append("file", uploadFiles);
        formdata.append("upload_preset", "ofkoxtub");
        formdata.append("cloud_name", "dq1yrqhsl");
        
        // console.log(uploadFiles);
        // console.log(formdata);
        // const response = await axios.post("https://api.cloudinary.com/v1_1/dq1yrqhsl/image/upload/", formdata);

        // console.log("this is my url of image :", response.data.url);
        // let imgurl = response.data.url;

        // let { Product_Name,Product_Brand, Product_Price,
        //     Product_Regular_Price, Product_RAM, Product_ROM } = input;

        // let linput = {
        //     Product_Name: Product_Name,
        //     Product_Price: Product_Price,
        //     Image_URL: imgurl,
        //     Product_Regular_Price: Product_Regular_Price,
        //     Product_RAM: Product_RAM,
        //     Product_ROM: Product_ROM,Product_Brand:Product_Brand
        // }
        // console.log("after attach detail of images of url :", linput)



        // // // Placeholder function for handling form submission

        // // console.log('Product details submitted:', productdetail);
        // // Add your logic for handling the form submission here
        // try {
        //   const response = await axios.post("http://localhost:5000/api/user/ProdoctAdd", linput); 
        //   console.log(response)
        //   console.log("send detail of product successful !@!")
        // } catch (err) {
        //   console.log("error in sending detail of product :", err)
        // }
    };


    return (
        <>
            <div className="First_box1">
                <div className="file_div">
                    <div>
                        <All_pages_option />
                    </div>
                </div>
                <div className="Upload_img_main_div">
                    <div className="img_div">
                        <div>
                            {/* <img src="./Admin_images/uploadimg.png" alt="" /> */}
                            <input className="file_upload" type="file" onChange={handleFileChange} multiple />
                            <h3>Click to upload up to images</h3>

                        </div>

                    </div>
                    <div className="sec_box_img">
                        <div>
                            <img src="./Admin_images/app.png" alt="" />
                        </div>
                        <div>
                            <img src="./Admin_images/Galaxy.png" alt="" />
                        </div>
                        <div>
                            <img src="./Admin_images/i phone 13 2.png" alt="" />
                        </div>
                    </div>


                    <div className="Input_div_start">
                        <h2>Add Products</h2>
                        <div className="Input_div_start_box">
                            <div id="Name_input1">
                                <label>Enter Product Name :</label><br />
                                <input type="text" name="Product_Name" value={input.Product_Name} onChange={inputhandle} />
                            </div>
                            <div id="Last_Name1">
                                <label>Enter Product Price :</label><br />
                                <input type="text" name="Product_Price" value={input.Product_Price} onChange={inputhandle} />
                            </div>
                            <div id="Last_Name1">
                                <label>Enter Regular price :</label><br />
                                <input type="text" name="Product_Regular_Price" value={input.Product_Regular_Price} onChange={inputhandle} />
                            </div>
                            <div id="Last_Name1">
                                <label>Choose a Brand:</label><br />
                                <input type="text" name="Product_Brand" value={input.Product_Brand} onChange={inputhandle} />
                            </div>
                            <div id="Last_Name1">
                                <label>RAM :</label><br />
                                <input type="text" name="Product_RAM" value={input.Product_RAM} onChange={inputhandle} />
                            </div>
                            <div id="Last_Name1">
                                <label>ROM :</label><br />
                                <input type="text" name="Product_ROM" value={input.Product_ROM} onChange={inputhandle} />
                            </div>
                            <button id="Registration_btn1" onClick={handleAddProduct}>
                                <h1>Add Product</h1>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default AddProduct;