import { useState } from "react";
import './payment.css';
function Payment(){
    return(
        <div className="container">
        <form>

            <div className="row">

                <div className="col">

                    <h3 className="title">Billing address</h3>

                    <div className="inputBox">
                        <span>Full name :</span>
                        <input type="text" placeholder="Full name" id="name"></input>
                    </div>
                    <div className="inputBox">
                        <span>E-mail :</span>
                        <input type="email" placeholder="example@example.com" id="email"></input>
                    </div>
                    <div  className="inputBox">
                        <span>Address :</span>
                        <input type="text" placeholder="room - street - locality" id="address"></input>
                    </div>
                    <div className="inputBox">
                        <span>City :</span>
                        <input type="text" placeholder="Mumbai" id="city"></input>
                    </div>

                    <div className="flex">
                        <div className="inputBox">
                            <span>State :</span>
                            <input type="text" placeholder="India" id="state"></input>
                        </div>
                        <div className="inputBox">
                            <span>Zip Code :</span>
                            <input type="text" placeholder="123 456" id="zipcode"></input>
                        </div>
                    </div>

                </div>

                <div className="col">

                    <h3 className="title">Payment</h3>


                    <div className="inputBox">
                        <span>Cards Accepted :</span>
                        <img src="./Photos/card_img.png" alt=""></img>
                    </div>
                    <div className="inputBox">
                        <span>Name on card :</span>
                        <input type="text" placeholder="Name" id="cardtype"></input>
                    </div>
                    <div className="inputBox">
                        <span>Credit card number :</span>
                        <input type="number" placeholder="1111-2222-3333-4444" id="cardnumber"></input>
                    </div>

                    <div className="flex">
                        <div className="inputBox">
                            <span>Expiry :</span>
                            <input type="number" placeholder="MM/YYYY" id="expiry"></input>
                        </div>
                        <div className="inputBox">
                            <span>CVV :</span>
                            <input type="text" placeholder="1234" id="cvv"></input>
                        </div>
                    </div>

                </div>

            </div>

            <input type="submit" value="proceed to checkout" class="submit-btn" id="submit"></input>

        </form>
    </div>
    )
}
export default Payment;