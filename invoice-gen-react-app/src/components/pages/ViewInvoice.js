import React, {useState, useEffect} from "react";
import axios from "axios";

const ViewInvoice = () => {
    console.log("Hi Shivam, you are calling me from outside uesEffect!");
    const [items,
        setItems] = useState([]);
    useEffect(() => {
        console.log("Hi Shivam, you are calling uesEffect!");
        loadItem();
    }, [])

    //load data from db.json from 3001 port to 3000 which runs our react app
    const loadItem = async() => {
        const result = await axios.get("http://localhost:3001/items");
        setItems(result.data);
        console.log(result, "ITEM LOADED!");
    }
    return (
        <div className="container">
            <h6 className="">We are loading db.json data from port:3001</h6>
            <table className="table">
                <thead className="thead bg-info text-white">
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                        <th scope="col">IGST</th>
                    </tr>
                </thead>
                <tbody>

                    {items.map((singleItem, index) => (
                        <tr>
                            <td>{singleItem.itemId}</td>
                            <td>{singleItem.description}</td>
                            <td>{singleItem.quantity}</td>
                            <td>{singleItem.price}</td>
                            <td>{singleItem.IGST}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className="items-table"></div>
        </div>
    );
}
export default ViewInvoice