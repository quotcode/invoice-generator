import React from 'react';

const ItemsList = (props) => {
    // console.log("Hello from ItemsList component!...",allItems.itemId,
    // allItems.description)
    return (
        <div className="container">
            <table className="table">
                
                <tr>
                <td>{props.items.itemId}</td>        
                <td>{props.items.description}</td>     
                <td>{props.items.quantity}</td>     
                <td>{props.items.price}</td> 
                </tr>    
            </table>
        </div>

    )
}

export default ItemsList