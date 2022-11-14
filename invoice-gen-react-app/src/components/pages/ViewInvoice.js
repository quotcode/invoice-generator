import React, {useContext} from "react";
import {AppContext} from "../../Context";
import "../../ViewInvoice.css";
import pic from "../../quotcode-logo-black-2.png";

const ViewInvoice = () => {
    const {custs} = useContext(AppContext);
    // GST in percentage
    const GST = 9; 
    // DISCOUNT in percentage
    const DISCOUNT = 0;
    // for displaying rupee symbol and formatting the currency based on INDIAN Standards
    const displayCurrency = (amt) => {
        return (amt.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'INR'
        })+"/-");
    }
    // amount calculated after adding all the prices*quantity of each item added in invoice
    const calSubTotal = () => {
        let res = 0;
        custs
            .items
            .forEach((k, v) => {
                res = res + (k.price) * (k.quantity);
                console.log("Here is the subtotal: >>>>" + res);
            });
        return res;
    }
    // amount to be deducted from subtotal
    const calDiscount = () => {
        return calSubTotal()*DISCOUNT*0.01;
    }
    // amount to be added to subtotal 
    const calGST = () => {
        return calSubTotal()*GST*0.01;
    }
    const calNetTotal = () => {
        let netTotal = calSubTotal() - calDiscount() + calGST(); 
        return netTotal;
    } 
    return (
        <div className="container view-invoice-main">
            <div class="hero-div">
                <div className="invoice-header">
                    <h1>Tax Invoice</h1>
                </div>
                <div classname="logo-div"><img src={pic} width={150}/></div>
            </div>
            <div className="alert" role="alert">
                <ul className="info-list">
                    <li>Invoice No:
                    </li>
                    <li>Invoice Date: {custs.invoiceDate}</li>
                </ul>
                <div className="info">
                    <div className="customer-info">

                        <ul className="info-list">
                            Invoice To...
                            <li>
                                <h6>{custs.custName}</h6>
                            </li>
                            <li>{custs.custEmail}</li>
                            <li>{custs.custPhone}</li>
                            <li>{custs.custAddress}</li>

                        </ul>

                    </div>
                    <div className="company-info">

                        <ul className="info-list">
                            Invoice from..
                            <li>
                                <h6>ABC Company</h6>
                            </li>
                            <li>abc4u@abc.com</li>
                            <li>+91 7777890033</li>
                            <li>K-456, Rajul Compound, Opp Western Express
                                <br></br>
                                Highway, Goregaon West, Mumbai,
                                <br></br>
                                Maharashtra-400080
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="items-table-div">
                    <table className="table items-table">
                        <thead>
                            <tr>
                                <th>SrNo</th>
                                <th>Item Description</th>
                                <th>Quantity</th>
                                <th>Price (per item)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {custs
                                .items
                                .map((k) => (
                                    <tr>
                                        <td>{k.itemId}</td>
                                        <td>{k.description}</td>
                                        <td>{k.quantity}</td>
                                        <td>{k.price}</td>
                                    </tr>
                                ))
}
                        </tbody>
                    </table>
                </div>

                <hr></hr>
                <div class="FinalAmtDiv">
                    <ul className="info-list">
                        <li>Subtotal: <span>{displayCurrency(calSubTotal())}</span></li>
                        <li>Discount: <span>{displayCurrency(calDiscount())}</span></li>
                        <li>GST(9%):  <span>{displayCurrency(calGST())}</span></li>
                        <li class="total-amt">TOTAL: <span>{displayCurrency(calNetTotal())}</span> </li>
                    </ul>
                </div>
                <div class="signature">
                    <div class="terms-and-conditions">
                        <ul className="info-list">
                            <li className="heading">Terms and Conditions</li>
                            <li className="terms">Terms and Conditions agreement includes the terms, the rules
                                <br></br>
                                and the guidelines of acceptable behavior and other useful sections to which
                                users must agree in order to make the payment.
                            </li>
                            <li className="greeting">THANK YOU FOR YOUR BUSINESS!</li>

                        </ul>
                    </div>
                    <div className="sign-div">
                        <ul className="info-list">
                            <li>Authorized Signature
                            </li>
                            <li className="sign-block">
                                _________________________________________________
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ViewInvoice;