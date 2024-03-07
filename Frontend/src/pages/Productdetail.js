const Productdetail=()=>{

    return(
        <>
            <div className="productmaindiv">
                <div className="viewproductimg">
                    <div className="allimg">
                        <div className="productimg1"><img src="./images/frontblack.jpg"></img>img1</div>
                        <div className="productimg2"><img src="./images/blackback.jpg"></img>img2</div>
                        <div className="productimg3"><img src="./images/mobileblack.jpg"></img>img3</div>
                        <div className="productimg4"><img src="./images/data.jpg"></img>img4</div>
                    </div>
                    <div className="mainimg">
                        <div className="viewimg">
                           <i></i>
                            <img src="./images/mobileblack.jpg"></img>
                            <img src="./images/"/>
                        </div>
                    </div>

                </div>
                <div className="productdetaildiv">
                    
                    <div>
                        <div className="line1"><h3>Vivo Y56 5G (4 GB RAM 156 GB ROM) (BLACK ENGINE)</h3></div>
                        <div className="stock"><span>IN STOCK</span></div>
                        <br/>
                        <div className="brandwarrenty">
                            <div><img className="vivoimg" src="./images/vivoicon.jpg"/></div>
                            <div className="warrenty"> One Year Warrenty for HandSet, 6 month for Accessorice</div>
                        </div>
                
                    </div>
                    <div className="main-high-payment">
                        <div className="highlightspart">
                            <div className="highlighttext"><h4>Highlights :</h4> </div>
                            
                            <li>Funtouch OS 13: Based on Android 13 </li>
                            <br/>
                            <li>6.58-inch(16.71) FHD+LCD Incell Display</li>
                            <br/>
                            <li>Media Tek Dimensity 700 Processor</li>
                            <br/>
                            <li>4GB RAM</li>
                            <br/>
                            <li>128 GB ROM</li>
                            <br/>
                            <li>5000 mAh (TYP) Battery</li>
                            <br/>
                            <li>50 MP Selfie Camera</li>
                            <br/>
                            <li>18W Fast Charger</li>
                            <br/>
                            <li>1 Year Manufacturer Warenty</li>
                        </div>
                        <div className="paymentoptionpart">
                            <div className="product-payment-option"><h4>Easy Payment Options:</h4> </div>
                            <div className="payment_option_for_product">
                                <ul>
                                    <li>EMI</li><br/>
                                    <li>Cash on Delivery</li><br/>
                                    <li>Net banking & Credit/Debit/ATM card </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="product-price">
                            <span className="buyprice">Rs.16,999</span>
                            <span className="actualprice">Rs.22,999 </span>
                            <span className="discountper">27% OFF</span>
                    </div>
                    <br/>
                    <div className="option-mobile">
                        <div className="blackcolor">
                            <center>
                                <div id="blackc"></div>
                                <br/>
                                <label htmlFor="blackc"><b>Black</b></label>
                            </center>
                        </div>
                        <div className="greencolor">
                            <center>
                                <div id="greenc"></div>
                                    <br/>
                                <label htmlFor="greenc"><b>Green</b></label>
                            </center>
                        </div>
                        <div className="whitecolor">
                            <center>
                                <div id="whitec"></div>
                                <br/>
                                <label htmlFor="whitec"><b>White</b></label>
                            </center>
                        </div>
                        <div className="orangecolor">
                            <center>
                                <div id="greenc"></div>
                                <br/>
                                <label htmlFor="greenc"><b>Orange</b></label>
                            </center>
                        </div>
                    </div> 
                    { /* quantity */ }
                    <div className="item-quantity">
                        <h1>Quantity</h1>
                        <div className="final-quantity">
                            <button>-</button>
                            <h3>1</h3>
                            <button>+</button>
                        </div>
                    </div>

                    {/* add to card or buy the product */}
                    <div className="addcart-buy">
                        <div className="addcart">
                            <p>Add to cart</p>
                        </div>
                        <div className="buy-product">
                            <p>Buy Now</p>
                        </div>
                            
                    </div>
                    
                    <div className="Rating-star">
                        
                        <div  className="ratings"><h3>Ratings</h3></div>
                    <div className="allstarts">
                        <span id="yellow" class="fa fa-star checked"></span>&nbsp;&nbsp;
                        <span id="yellow" class="fa fa-star checked"></span>&nbsp;&nbsp;
                        <span id="yellow" class="fa fa-star checked"></span>&nbsp;&nbsp;
                        <span id="black" class="fa fa-star"></span>&nbsp;&nbsp;
                        <span id="black" class="fa fa-star"></span>
                    </div>
                            
                    </div>

                </div>
                    
            </div>
               

           
        </>
    )
}
export default Productdetail;