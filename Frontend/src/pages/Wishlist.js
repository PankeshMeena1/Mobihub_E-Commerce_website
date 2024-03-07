import { Link } from "react-router-dom";
const Wishlist = () => {

    return (
        <>
            <div className="wishlistpage_main_div">
                <h1 className="headingwishlist">Wishlist</h1>
                <hr />
                <div className="all_items">
                    <div className="list_of_products_wishlist">
                        <div className="product_img">
                            <img src="./images/realme1.webp" alt="mobileimage"/>
                        </div>
                        <div className="product_first">
                            <h2>vivo Y56 5G (4 GB RAM , 128 ROM)</h2>
                            {/* <br /> */}
                            <h2>(black Engine)</h2>
                            <br />
                            <h3>Rs. 99,999</h3>
                            <button>Add to Cart</button>

                        </div>
                        <div className="remove_to_wishlist">
                            <Link> <img src="./images/removeicon.png" /></Link>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Wishlist;