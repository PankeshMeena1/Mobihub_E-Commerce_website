import All_pages_option from "./Admin_components/All_pages_option";


const All_products = () => {


    return (
        <>
            <div className="top_div">
                <All_pages_option />
                <div className="all_product_top_div">
                    <h1>
                        All Products
                    </h1>
                    <hr className="hr" />
                    <div className="maindiv_product_edit_delete">
                        <div className="product_edit_delete">
                            <h4>Products</h4>
                            <h4>Edit</h4>
                            <h4>Delete</h4>
                        </div>


                        <div className="productimg_edit_delete">
                            <div className="product_img_admin">
                                <div className="img1_div">
                                    <img src="./images/mob1.jpeg" />
                                </div>
                                <div className="product1_detail_admin">
                                    <div>Product Name : iphone 14 pro</div>
                                    <div>Product Price: 19,999</div>
                                    <div>Product Id: 0033-4423-4453</div>
                                    <div>Brand : Apple</div>
                                    <div>RAM : 8GB &nbsp;&nbsp; ROM : 128GB</div>
                                </div>
                            </div>
                            <div className="del_img_admin_product">
                                <img src="./Admin_images/deleteicon.png" />
                            </div>
                            <div className="edit_img_admin_product">
                                <img src="./Admin_images/editicon.png" />
                            </div>

                            <div className="mobileview_edit_delete">
                                <div className="mob_del_img_admin_product">
                                    <img src="./Admin_images/deleteicon.png" />
                                </div>
                                <div className="mob_edit_img_admin_product">
                                    <img src="./Admin_images/editicon.png" />
                                </div>
                            </div>

                        </div>
                       

                    </div>
                </div>
            </div>
        </>
    )
}
export default All_products;