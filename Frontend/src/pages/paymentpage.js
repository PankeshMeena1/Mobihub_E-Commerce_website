import { useState } from "react";
import "../css/paymentpage.css"
import Phonepe from "./PaymentComponents/Phonepe";
import COD from "./PaymentComponents/COD";
import Upi from "./PaymentComponents/Upi";
import CreditCard from "./PaymentComponents/CreditCard";

const Paymentpage = () => {


    let phonepeauth = false;
    let CODauth = false;
    let Creditcardauth = false;
    let Upiauth = false;

    var mymethod = "";
    const [payment, setPayment] = useState("")

    const makepayment = (e) => {
        // alert(e.target.value)
        let ll = e.target.value;
        setPayment(ll);
    }


    switch (payment) {
        case "card":
            mymethod = <CreditCard />
            Creditcardauth = true;
            Upiauth = false;
            phonepeauth = false;
            CODauth = false;
            break;
        case "upi":
            mymethod = <Upi />
            Upiauth = true;
            Creditcardauth = false;
            phonepeauth = false;
            CODauth = false;
            break;
        case "phonepe":
            mymethod = <Phonepe />
            phonepeauth = true;
            Upiauth = false;
            Creditcardauth = false;
            CODauth = false;
            break;
        case "COD":
            mymethod = <COD />
            CODauth = true;
            phonepeauth = false;
            Upiauth = false;
            Creditcardauth = false;
            break;
        // default:
        //   alert("invailid input");
    }


    return (
        <>
            <div className="heading-payment">Payment</div>
            <hr />
            <div className="payment-options-price-details">
                <div className="payment-options">
                    <div className="payment-options-heading">PAYMENT OPTION</div>
                    <div>
                        <div className="phonepay-option">
                            <input type="radio"
                                name="payment"
                                value="phonepe"
                                onClick={makepayment} />
                            <img src="./images/phonepe.png" alt="phonepe img" />
                            <span>Phonepe UPI 88XXXXXX270@ybl</span>
                            {/* <button>Continue</button> */}

                        </div>
                        {phonepeauth ? mymethod : ``}
                    </div>
                    <hr />
                    <div>
                        <div className="googlepay-option">
                            <input type="radio"
                                name="payment"
                                value="upi"
                                onClick={makepayment} />
                            <img src="./images/googlepay.png" alt="google pay img" />
                            <span>UPI</span>

                        </div>
                        {Upiauth ? mymethod : ``}
                    </div>
                    <hr />
                    <div>
                        <div className="credit-debit-atm">
                            <input type="radio"
                                name="payment"
                                value="card"
                                onClick={makepayment} />
                            <img src="./images/rupay.png" alt="rupay img" />
                            <div>
                                <span>Credit / Debit / ATM Card</span>
                                <div className="rbi-guidelines">Add and secure  cards as per RBI guidelines</div>
                            </div>

                        </div>
                        {Creditcardauth ? mymethod : ``}
                    </div>
                    <hr />
                    <div>


                        <div className="cash-on">
                            <input type="radio"
                                name="payment"
                                value="COD"
                                onClick={makepayment} />
                            <img src="./images/cashon.jpeg" alt="cash on delivery img" />
                            <span>Cash on Delivery</span>

                        </div>
                        {CODauth ? mymethod : ``}
                    </div>
                    <hr />
                </div>

                {/* part 2 */}

                <div className="prices-details-category">
                    <div className="prices-details-category-div">

                        <h1 className="price-details">PRICE DETAILS</h1>
                        <br />
                        <div className="all-payment-detail">

                            <div className="main-product-price">
                                Price (2 items)
                                <span> ₹33,998</span >
                            </div>

                            <hr />

                            <div className="delivery-charges">
                                Delivery Charges
                                <span> Free</span >
                            </div>
                            <hr />
                            <div className="packaging-charges">
                                Packaging charges
                                <h4>₹60</h4>
                            </div>
                            <hr />

                            <div className="amount-payable">
                                <h3>Amount Payable</h3>
                                <h4>₹34,058</h4>
                            </div>

                        </div>
                        <div className="proceed-to-pay" >
                            PROCEED TO PAY
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Paymentpage;