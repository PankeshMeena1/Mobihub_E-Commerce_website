import All_pages_option from "./Admin_components/All_pages_option";
const Admin_Home = () => {
    return (
        <>
            <div className="First_box">

                <All_pages_option />
                <div className="First_box_sec">
                    <h1>Admin Home</h1>

                    <div className="for_boxex_first">
                        <div className="a1">
                            <h3 id="h3">Products</h3>
                            <h5 id="h5">35</h5>
                        </div>
                        <div className="a2">
                            <h3 id="h3">Orders</h3>
                            <h5 id="h5">13</h5>
                        </div>
                    </div>
                    <div className="for_boxex_first">
                        <div className="a3">
                            <h3 id="h3">Earnings</h3>
                            <h5 id="h5">INR  9700</h5>
                        </div>
                        <div className="a4">
                            <h3 id="h3">Views</h3>
                            <h5 id="h5">233</h5>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Admin_Home;