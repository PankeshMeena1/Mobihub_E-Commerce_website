
import Carousel from "./components/Carousel";
import BestSellers from "./components/BestSellers/BestSellers";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import MoreProduct from "./components/MoreProduct";


const Home = () => {

    return (
        <>



            {/* new carousal */}
            <Carousel/>

            {/* new carousal */}


            <br/>

            <section className="best_seller">
                <>
                <BestSellers/>
                <br/>
                </>



            </section>

            <br/>


            <Marquee/>
            <br/>
            <MoreProduct/>




            <section className="Shop_Brand_main">
                <div className="shop_brand_name">
                    <span>Shop By Brandzzzzzzzzzzzz </span>
                </div>
                <div className="shop_brand_name_2">
                    <span>Realme SmartPhone</span>
                    <button >VIEW ALL</button>
                </div>

                <div className="grid_section">

                    <div className="realme_main_div">
                        <div className="main_realme_img">
                            <img src="./images/realme1.webp" alt="realme" />
                        </div>
                        <div className="main_main_img_detail">
                            <p>Realme Narzo 50 5G</p>
                            <p>(Mars Orange 64) </p>
                            <div className="realme_1_img">
                                <img src="./images/rating.png" alt="rating" /><br />
                                <p>₹ 10,999<span>18,999</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="realme_main_div">
                        <div className="main_realme_img">
                            <img src="./images/realme1.webp" alt="realme" />
                        </div>
                        <div className="main_main_img_detail">
                            <p>Realme Narzo 50 5G</p>
                            <p>(Mars Orange 64) </p>
                            <div className="realme_1_img">
                                <img src="./images/rating.png" alt="rating" /><br />
                                <p>₹ 10,999<span>18,999</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="realme_main_div">
                        <div className="main_realme_img">
                            <img src="./images/realme1.webp" alt="realme" />
                        </div>
                        <div className="main_main_img_detail">
                            <p>Realme Narzo 50 5G</p>
                            <p>(Mars Orange 64) </p>
                            <div className="realme_1_img">
                                <img src="./images/rating.png" alt="rating" /><br />
                                <p>₹ 10,999<span>18,999</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="realme_main_div">
                        <div className="main_realme_img">
                            <img src="./images/realme1.webp" alt="realme" />
                        </div>
                        <div className="main_main_img_detail">
                            <p>Realme Narzo 50 5G</p>
                            <p>(Mars Orange 64) </p>
                            <div className="realme_1_img">
                                <img src="./images/rating.png" alt="rating" /><br />
                                <p>₹ 10,999<span>18,999</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="Poco_section_main">

                <div className="Poco_brand_name" >
                    <span >Poco SmartPhone</span>
                    <button id="button_poco">VIEW ALL</button>
                </div>

                <div className="grid_section">

                    <div className="realme_main_div">
                        <div className="main_realme_img">
                            <img src="./images/poco1.png" alt="realme" />
                        </div>
                        <div className="main_main_img_detail">
                            <p>Realme Narzo 50 5G</p>
                            <p>(Mars Orange 64) </p>
                            <div className="realme_1_img">
                                <img src="./images/rating.png" alt="rating" /><br />
                                <p>₹ 10,999<span>18,999</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="realme_main_div">
                        <div className="main_realme_img">
                            <img src="./images/poco2.png" alt="realme" />
                        </div>
                        <div className="main_main_img_detail">
                            <p>Realme Narzo 50 5G</p>
                            <p>(Mars Orange 64) </p>
                            <div className="realme_1_img">
                                <img src="./images/rating.png" alt="rating" /><br />
                                <p>₹ 10,999<span>18,999</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="realme_main_div">
                        <div className="main_realme_img">
                            <img src="./images/poco3.png" alt="realme" />
                        </div>
                        <div className="main_main_img_detail">
                            <p>Realme Narzo 50 5G</p>
                            <p>(Mars Orange 64) </p>
                            <div className="realme_1_img">
                                <img src="./images/rating.png" alt="rating" /><br />
                                <p>₹ 10,999<span>18,999</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="realme_main_div">
                        <div className="main_realme_img">
                            <img src="./images/poco4.png" alt="realme" />
                        </div>
                        <div className="main_main_img_detail">
                            <p>Realme Narzo 50 5G</p>
                            <p>(Mars Orange 64) </p>
                            <div className="realme_1_img">
                                <img src="./images/rating.png" alt="rating" /><br />
                                <p>₹ 10,999<span>18,999</span></p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className="grid_poco">

                    <div className="poco_main_div">
                        <img src="./images/poco1.png" alt="realme" />
                        <span>Poco X5 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
                        <div className="poco_1_img">
                            <img src="./images/rating.png" alt="rating" /><br />
                            <p>₹ 10,999<span>18,999</span></p>
                        </div>
                    </div>


                    <div className="poco2_div">
                        <img src="./images/poco2.png" alt="realme" />
                        <span>Poco X5 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
                        <div className="poco_2_img">
                            <img src="./images/rating.png" alt="rating" /><br />
                            <p>₹ 10,999<span>18,999</span></p>
                        </div>
                    </div>



                    <div className="poco3_div">
                        <img src="./images/poco3.png" alt="realme" />
                        <span>Poco X4 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
                        <div className="poco_3_img">
                            <img src="./images/rating.png" alt="rating" /><br />
                            <p>₹ 10,999<span>18,999</span></p>
                        </div>
                    </div>




                    <div className="poco4_div">
                        <img src="./images/poco4.png" alt="realme" />
                        <span>Poco F5 5G <br /> <p>(Mars Orange 64)</p> </span>
                        <div className="poco_4_img">
                            <img src="./images/rating.png" alt="rating" /><br />
                            <p>₹ 10,999<span>18,999</span></p>
                        </div>
                    </div>

                </div> */}




            <Services/>
            </section>







        </>
    )
}

export default Home;