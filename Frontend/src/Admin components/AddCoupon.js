import { useState } from "react";

const AddCoupon = () => {

  const [input, setInput] = useState({});

  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const createcoupon = () => {
    console.log(input)
  }

  return (
    <>

      <div className="First_box_sec1">

        <h1 className="heading">All Coupon </h1>

        <div className="tital">
          <h4>s/n</h4>
          <h4>Name</h4>
          <h4>Discount(0%)</h4>
          <h4>Date Created</h4>
          <h4>Expiry Date</h4>
          <h4>Action</h4>
        </div>
        <hr />
        <div className="sub_tital">
          <p>1</p>
          <p>30 OFF</p>
          <p>30% OFF</p>
          <p>2023-01-12</p>
          <p>2023-01-12</p>

          <div className="del_img">
            <img src="./Admin_images/delete.png" alt="" />
          </div>

        </div>

        <div className="input_box">
          <h3 className="Heading1">Creat Coupon</h3>
          <p>Use the tarm to Create a Coupon</p>
        </div>
        <div className="inside_box">
          <p >Coupon Name</p>
          <input type="text" placeholder=" Enter Coupon Name" name="Coupon_Name" value={input.Coupon_Name} onChange={inputHandle} />
          <p >Discount %</p>
          <input type="text" placeholder=" Enter Discount %"
            name="Discount" value={input.Discount} onChange={inputHandle} />
          <p >Expiry date</p>
          <input type="date" placeholder=" 01/01/2024"
            name="Expiry_Date" value={input.Expiry_Date} onChange={inputHandle} />
          <div className="btn">
            <button onClick={createcoupon}>Save Coupon </button>
          </div>
        </div>

      </div>
    </>
  );
}


export default AddCoupon;