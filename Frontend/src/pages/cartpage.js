import { useSelector, useDispatch } from "react-redux";
import { qtyIncrease, qtydecrease, delfromcart } from "../slice/ProductSlice";
import { useNavigate } from "react-router-dom";

const Cardpage = () => {

    const mynav = useNavigate();
    var totalPrice = 0;
    const mydispatch = useDispatch();
    const cartdata = useSelector((state) => state.cartslice.cart)
    //const mydispatch = useDispatch();


    const productqtyinc = (id) => {
        // alert(id)
        mydispatch(qtyIncrease({ id: id }));
    }
    const productqtydec = (id) => {
        // alert(id)
        mydispatch(qtydecrease({ id: id }));
    }
    // for delete item 
    const Deleteitem = (id) => {
        mydispatch(delfromcart({ id: id }))
    }

    const ans = cartdata.map((key) => {
        totalPrice += key.Price * key.quantity;
        return (
            <>
                <tr className="item_set_cart">
                    <td>

                        <div className="cart-info">
                            <img src={key.Image_path} className="mobimg" />
                            <div>
                                <p> {key.Name}</p>
                                <p>Price:<b>₹{key.Price}</b></p>
                                {/* <a href="">Remove</a>  */}
                            </div>
                        </div>

                    </td>
                    <td>
                        <div className="increment">
                            <td><button className="minus" onClick={() => productqtydec(key.id)}><b>-</b></button></td>
                            <td><button><b>{key.quantity}</b></button></td>
                            <td><button className="plus" onClick={() => productqtyinc(key.id)}><b>+</b></button></td>

                        </div>
                    </td>
                    <td><img src="./images/delete.jpeg" className="delete"
                        onClick={() => Deleteitem(key.id)} /></td>
                </tr>
            </>
        )
    });

    const items = cartdata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.Name} &nbsp; Q - {key.quantity}</td>
                    <td>₹{key.quantity * key.Price}</td>
                </tr>
            </>
        )
    })

    return (
        <>
            <h1 className="My_cart_heading"> MY CART</h1>

            <div className="card-page">

                <div id="sec_div">

                    <table>
                        <tr className="item_set_cart">
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                        </tr>
                        {ans}
                    </table>

                    <hr size="2" color="gray" />



                    <hr size="2" color="gray" />
                    <section id="cart-bottom" className="container">
                        <div className="row">
                            <div className="coupon">
                                <div>
                                    <h5>COUPON</h5>
                                    <p>Enter your copon code if you Have one.</p>
                                    <input type="text" placeholder="Coupon Code" />
                                    <button>Apply Coupon</button>
                                </div>
                            </div>
                        </div>

                    </section>


                </div>
                {/* //----------------------------------------------second part---------------------------------------------------//                 */}

                <div className="second_div" >
                    <h4 className="order">ORDER DETAILS</h4>
                    {/* <div className="order">
                            
                        </div> */}

                    <div className="total-price">
                        <table>
                            {items}
                        </table>
                        <hr size="1" color="gray" />
                        <table>
                            <tr className="cart_tr">
                                <td><b>Subtotal</b></td>
                                <td><b>₹{totalPrice}</b></td>
                            </tr>
                        </table>
                        <hr size="1" color="gray" />
                        <table>
                            <tr className="cart_tr">
                                <td>Shipping</td>
                                <td>₹ 0</td>
                            </tr>
                        </table>
                        <hr size="1" color="gray" />
                        <table>
                            <tr className="cart_tr">
                                <td>Tax</td>
                                <td>₹0</td>
                            </tr>
                        </table>
                        <hr size="1" color="gray" />
                        <table>
                            <tr className="cart_tr">
                                <td><b>Total</b></td>
                                <td><b>₹{totalPrice}</b></td>
                            </tr>
                        </table>
                        <hr size="1" color="gray" />


                    </div>

                    <div className="button1">
                        <center>

                            <button onClick={()=>mynav("/buynow")}>PLACE ORDER </button>
                        </center>
                    </div>

                </div>
            </div>

        </>)
}
export default Cardpage;