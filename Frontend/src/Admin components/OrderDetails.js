
const OrderDetails = () => {

    return (
        <>
            
                <div className="All_orders_detail_admin">
                    <h1>
                        All Orders
                    </h1>
                    <div>
                        <nav className="nav_order_detail">
                            <h5>s/n</h5>
                            <h5>Date</h5>
                            <h5>Order ID</h5>
                            <h5>Order Amount </h5>
                            <h5>Order Status</h5>
                        </nav>
                        <div className="All_order_detail_info">
                            <div>1.</div>
                            <div>web jan 10 2024 at 3:09:22 PM</div>
                            <div>f4gh5j6k7l83gh4j</div>
                            <div>INR 200</div>
                            <div>
                                <select style={{border:"none"}}>
                                    <option value="Processing">Processing</option>
                                    <option value="Order Placed">Order Placed</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="shipping">shipping</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
          
        </>
    )
}

export default OrderDetails;