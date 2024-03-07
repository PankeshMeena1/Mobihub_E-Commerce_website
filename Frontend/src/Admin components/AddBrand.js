import { useState } from "react";
const AddBrand = () => {

    const [input, setInput] = useState({});

    const inputHandle = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInput((values) => ({ ...values, [name]: value }));
    };
  
    const createbrand = () => {
      console.log(input)
    }

    return (
        <>
            <div className="boxmain">

                <h1 className="Had1">Creat Brands</h1>
                <div className="box">
                    <div className="input_container">

                        <p>Use the tarm to <b>Creat Brands</b></p>
                    </div>
                    <div className="inside_container">
                        <p >Brand name</p>
                        <input type="text" placeholder=" Enter Brand name" 
                        name="Brand_Name" value={input.Brand_Name} onChange={inputHandle}/>
                        <p >Parent category</p>
                        <input type="text" placeholder=" Select Parent category" 
                        name="Parent_Category" value={input.Parent_Category} onChange={inputHandle}/>

                        <div className="btn_1">
                            <button onClick={createbrand}> Save Brand </button>
                        </div>
                    </div>
                    <h2 className="had"> Creat Brands </h2>
                    <div className="tital_1">
                        <h4>s/n</h4>
                        <h4>Name</h4>
                        <h4>Category</h4>
                        <h4>Action</h4>
                    </div>
                    <hr />
                    <div className="sub_tital_1">
                        <p>1</p>
                        <p>Samsung</p>

                        <p>Mobile</p>

                        <div className="del_img_1">
                            <img src="./Admin_images/delete.png" alt="" />
                        </div>

                    </div>

                    <div className="sub_tital_1">
                        <p>2</p>
                        <p>Redmi</p>

                        <p>Mobile</p>

                        <div className="del_img_1">
                            <img src="./Admin_images/delete.png" alt="" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}

export default AddBrand;