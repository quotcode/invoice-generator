import {React, useState, useContext, useRef} from "react";
import {AppContext} from "../../Context";
import {Link} from 'react-router-dom';
import {useReactToPrint} from "react-to-print";
import ViewInvoice from "./ViewInvoice";
import Toast from 'react-bootstrap/Toast';

const Invoice = () => {
    //  Start: toast message script - flag for showing toast on submitting the
    // details
    let showToast = false;

    // End : toast message script - flag for showing toast on submitting the details
    // Start: For Print Feature
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });
    // End: For Print Feature for creating a context for entire React application
    const {dispatchCustomerEvent} = useContext(AppContext);

    // below initialization is for items map inside custs map
    const [itemId,
        setItemId] = useState('');
    const [description,
        setDescription] = useState('');
    const [quantity,
        setQuantity] = useState('');
    const [price,
        setPrice] = useState('');

    // customer fields
    const [custName,
        setCustName] = useState('');
    const [custEmail,
        setCustEmail] = useState('');
    const [custPhone,
        setCustPhone] = useState('');
    const [custAddress,
        setCustAddress] = useState('');
    const [items,
        setItems] = useState([]);
    const invoiceDate = new Date().toDateString() + " " + new Date().toLocaleTimeString();

    const handleAddItem = (e) => {
        e.preventDefault();
        const item = {
            itemId,
            description,
            quantity,
            price
        }
        setItems([
            ...items,
            item
        ]);
        console.log(item.itemId, "-------------", item.description, item.price, item.quantity)
        //after adding to the context the values should be flushed from input fields
        setItemId('');
        setDescription('');
        setPrice('');
        setQuantity('');
    }

    const handleDeleteItem = (e) => {
        // assign all the existing values to corresponding fields but ignore the
        // matching index
        setItems(items => items.filter((item, index) => index !== e));
        console.log("After deleting the items contains:", items);
    }
    // after user hits submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        const cust = {
            invoiceDate,
            custName,
            custEmail,
            custPhone,
            custAddress,
            items
        }

        //adding the newly created cust array to context
        dispatchCustomerEvent('ADD_CUST', {newCust: cust});

        showToast = !showToast;
        console.log("toast "+showToast)
        console.log("++++++++++++++ Here are customer details ++++++++++++++", cust);
    }

    const handlePreview = (e) => {
        e.preventDefault();
        handleSubmit(e);
    }
    return (
        <div className="container">
            {/* <ViewInvoice ref={componentRef}  /> */}
            <h6>Customer Details</h6>
            <form className="">
                <div className="row p-1">
                    <div className="col-sm-3">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={custName}
                            onChange={e => {
                            setCustName(e.target.value.toUpperCase())
                        }}
                            placeholder="Name"
                            aria-label="First name + Last name"/>
                    </div>
                    <div className="col-sm-3">
                        <input
                            type="email"
                            className="form-control"
                            value={custEmail}
                            onChange={e => {
                            setCustEmail(e.target.value)
                        }}
                            name="email"
                            placeholder="Enter email here"
                            aria-label="email"/>
                    </div>
                    <div className="col-sm-2">
                        <input
                            type="phone"
                            className="form-control"
                            name="phone"
                            value={custPhone}
                            onChange={e => {
                            setCustPhone(e.target.value)
                        }}
                            placeholder="Enter contact no"
                            aria-label="email"/>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-sm-4">
                        <input
                            type="text"
                            name="address"
                            value={custAddress}
                            onChange={e => {
                            setCustAddress(e.target.value)
                        }}
                            className="form-control"
                            placeholder="Enter Address"
                            aria-label="Address"/>
                    </div>
                </div>
                <hr></hr>
                <h6>Item Details</h6>

                <div className="alert alert-primary m-1" role="alert">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.length === 0
                                ? <p className="container">No items added yet</p>
                                : items.map((item, i) => (
                                    <tr>
                                        <td>{item.itemId}</td>
                                        <td>{item.description}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>
                                        <td>{(item.price) * (item.quantity)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDeleteItem(i)}>Drop</button>
                                        </td>
                                    </tr>
                                ))
}
                        </tbody>
                    </table>
                </div>
                <hr></hr>

                <ul className="list-group list-group-horizontal row g-1 m-0">
                    <div className="col-md-1">
                        <input
                            type="text"
                            className="form-control"
                            id="inputSrNo"
                            name="itemId"
                            placeholder="Sr.no"
                            value={itemId}
                            onChange={e => {
                            setItemId(e.target.value)
                        }}/>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            id="inputDesc"
                            name="description"
                            placeholder="Enter Description"
                            onChange={e => {
                            setDescription(e.target.value)
                        }}
                            value={description}/></div>
                    <div className="col-md-1">
                        <input
                            type="text"
                            className="form-control"
                            id="inputQty"
                            name="quantity"
                            placeholder="Qty"
                            onChange={e => {
                            setQuantity(e.target.value)
                        }}
                            value={quantity}/></div>
                    <div className="col-md-2">
                        <input
                            type="text"
                            className="form-control"
                            id="inputPrice"
                            placeholder="Enter Price"
                            name="price"
                            onChange={e => {
                            setPrice(e.target.value)
                        }}
                            value={price}/>
                    </div>

                    {/* <button className="btn btn-danger col-md-1 m-1">Delete</button> */}
                    <div className="col-md-1">
                        <button className="btn btn-success" onClick={handleAddItem}>Add</button>
                    </div>
                </ul>

                <div className="d-flex m-3">
                    <div className="align-self-start">
                        <span></span>
                        <button onClick={handlePreview} className="btn btn-outline-success">
                            Submit
                        </button>
                        <button onClick={handlePrint} className="btn btn-dark">
                            Print Invoice
                        </button>
                    </div>
                </div>
            </form>

            <div>
                {showToast===true ?
                    // ? <div
                    //         style={{
                    //         display: 'block',
                    //         width: 700,
                    //         padding: 30
                    //     }}>
                    //         <h4>React-Bootstrap Toast Component</h4>
                    //         <Toast>
                    //             <Toast.Header>
                    //                 <img
                    //                     alt="Sample Image"
                    //                     width="20px"
                    //                     src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                    //                     className="rounded mr-2"/>
                    //                 <strong className="mr-auto">
                    //                     GeeksforGeeks
                    //                 </strong>
                    //                 <small>
                    //                     Last Seen: 1 hour ago
                    //                 </small>
                    //             </Toast.Header>
                    //             <Toast.Body>
                    //                 Greetings from GeeksforGeeks
                    //             </Toast.Body>
                    //         </Toast>
                    //     </div>
                    "wfgwmg"
                    : "Nothing much to say"
}
            </div>
        </div>
    );

}

export default Invoice;