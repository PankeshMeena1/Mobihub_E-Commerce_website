import All_pages_option from "./Admin_components/All_pages_option";

const Brand = () => {
    return (
        <>
            <div className="First_box_1">
                <All_pages_option />
                <div className="box">

                    <div className="input_container">
                        <h3 className="Had1">Creat Brands</h3>
                        <p>Use the tarm to <b>Creat Brands</b></p>
                    </div>
                    <div className="inside_container">
                        <p >Brand name</p>
                        <input type="text" placeholder=" Enter Brand name" />
                        <p >Parent category</p>
                        <input type="text" placeholder=" Select Parent category" />

                        <div className="btn_1">
                            <button> Save Brand </button>
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
export default Brand;