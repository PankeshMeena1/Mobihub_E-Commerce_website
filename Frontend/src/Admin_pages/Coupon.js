import All_pages_option from "./Admin_components/All_pages_option"
const Coupon = () => {
    return (
        <>
            <div className="First_box1">
                <All_pages_option />
                <div className="First_box_sec1">

                    <h2 className="heading">All Coupon </h2>

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
                        <input type="text" placeholder=" Enter Coupon Name" />
                        <p >Discount %</p>
                        <input type="text" placeholder=" Enter Discount %" />
                        <p >Expiry date</p>
                        <input type="text" placeholder=" 01/01/2024" />
                        <div className="btn">
                            <button>Save Coupon </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Coupon;