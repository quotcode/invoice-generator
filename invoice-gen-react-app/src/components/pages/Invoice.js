import React from "react";


const Invoice = () => {
    return (
        <div className="container">
            <h4>Customer Details</h4>
            <form className="row g-1">
                <div className="col-md-4">
                    <label htmlFor="inputName" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Enter customer's name"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputEmail" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Enter customer's email id"/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputPhone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Enter customer's phone number"/>
                </div>
                <div className="col-7">
                    <label htmlFor="inputAddress" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Enter customer's address"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputCustGSTIN" className="form-label">
                        GSTIN
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCustGSTIN"
                        placeholder="Enter customer's GSTIN number"/>
                </div>
                {/* <hr></hr> */}
                <ul class="list-group list-group-horizontal row g-4 m-0">
                    <li class="list-group-item list-group-item-dark col-md-1">Sr.no</li>
                    <li class="list-group-item list-group-item-dark col-md-4">Description</li>
                    <li class="list-group-item list-group-item-dark col-md-1">Quantity</li>
                    <li class="list-group-item list-group-item-dark col-md-2">Price</li>
                    <li class="list-group-item list-group-item-dark col-md-1">IGST</li>
                    {/* <li class="list-group-item col-md-2">TOTAL</li> */}
                </ul>

                <ul class="list-group list-group-horizontal row g-1 m-0">
                    <div className="col-md-1"><input type="text" className="form-control" id="inputSrNo" placeholder="Sr.no"/>
                    </div>
                    <div className="col-md-4"><input
                        type="text"
                        className="form-control"
                        id="inputDesc"
                        placeholder="Enter Description"/></div>
                    <div className="col-md-1"><input type="text" className="form-control" id="inputQty" placeholder="Qty"/></div>
                    <div className="col-md-2"><input
                        type="text"
                        className="form-control"
                        id="inputPrice"
                        placeholder="Enter Price"/></div>
                    <div className="col-md-1"><input type="text" className="form-control" id="inputIGST" placeholder="IGST"/></div>

                    <button className="btn btn-danger col-md-1 m-1">Delete</button>
                </ul>
                

                {/* Submit Button */}
                <div className="col-sm-1">
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-secondary add-item-button">
                        Add Item
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Invoice;