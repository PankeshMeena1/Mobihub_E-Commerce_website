import { Link } from "react-router-dom";

const ManageAddress = () => {
   return (
      <>

         <div className="main-body">
            <div className="main-pages">
               <div className="userimg-name">
                  <div>
                     <img className="userimg" src="./images/userimg.png"></img>
                  </div>
                  <div><h3 className="herry">Herry</h3></div>
                  {/* <hr className="line" /> */}

               </div>
               {/* git config --global user.email "you@example.com"
               git config --global user.name "Your Name" */}


               <div className="allpages">
                  <div className="orders">
                     <Link to="Orderdetail">
                        <img src="./images/awerro.png" />
                        <p>My orders</p>
                     </Link>
                  </div><hr />

                  <div className="orders">
                     <Link to="manageaddress">
                        <img src="./images/address.png" alt="" />
                        <p>Manageaddress</p>
                     </Link>
                  </div>
                  <hr />
                  <div className="orders">
                     <Link>
                        <img src="./images/profile.jpeg" alt="" />
                        <p>Profile Information</p>
                     </Link>
                  </div>
                  <hr />
                  <div className="orders">
                     <Link to="cartpage">
                        <img src="./images/cartimg.png" alt="" />
                        <p>Cart</p>
                     </Link>
                  </div>
                  <hr />
                  <div className="orders">
                     <Link to="wishlist">
                        <img src="./images/wishlist.png" alt="" />
                        <p>Wishlist</p>
                     </Link>
                  </div>

                  <hr />
                  <div className="orders">
                     <Link>
                        <img src="./images/logout1.png" alt="" />
                        <p>Logout</p></Link>
                  </div>

               </div>
            </div>

            <div className="mainaddress-page">
               <div className="address-page">
                  <img src="./images/address.png" />
                  <p>Manage Address</p>
               </div>
               <div className="detail-page">
                  <h2>Add A New Address</h2>

                  <div className="address-form">

                     <div className="form1-div">
                        <input type="text" placeholder="Name"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder="Mobile No."></input>
                     </div>
                     <div className="form1-div">
                        <input type="text" placeholder="Pincode"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder="Locality"></input>
                     </div>
                     <div className="form2-div">
                        <input type="text" placeholder="Address(Area/Streat)"></input>
                     </div>
                     <div className="form1-div">
                        <input type="text" placeholder="City/Dist./Town"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder="Countery"></input>
                     </div>
                     <div className="form3-div">
                        <input type="text" placeholder="Landmark"></input>
                     </div>


                  </div>
                  <div>
                     <div className="address">Address Type</div>
                     <div className="address-type">
                        <div><input id="radio-home" name="Home_work_place" type="radio"/>&nbsp;Home</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div><input id="radio-place" type="radio" name="Home_work_place"/>&nbsp;Work Place</div>
                     </div><hr />
                  </div>
                  <div className="stauts">
                     <div className="save-address">
                        <p>Save</p>
                     </div>
                     <div className="cancle-address">
                        <p>Cancel</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>


      </>
   )
}
export default ManageAddress;