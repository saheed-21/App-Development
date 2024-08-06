import React from 'react';
import '../styles/StockMovement.css';


function StockMovement() {
    return (
        <div className="stock-movement">
            <h3>Stock Movement</h3>
            <p>Track stock movements and manage warehouses.</p>
            <div className="movement-details">
                <div className="detail">
                    <label>Movement ID:</label>
                    <input type="text" placeholder="Enter movement ID" />
                </div>
                <div className="detail">
                    <label>Item Name:</label>
                    <input type="text" placeholder="Enter item name" />
                </div>
                <div className="detail">
                    <label>Quantity:</label>
                    <input type="number" placeholder="Enter quantity" />
                </div>
                <div className="detail">
                    <label>From Location:</label>
                    <input type="text" placeholder="Enter source location" />
                </div>
                <div className="detail">
                    <label>To Location:</label>
                    <input type="text" placeholder="Enter destination location" />
                </div>
                <div className="detail">
                    <label>Date:</label>
                    <input type="date" />
                </div>
            </div>
            <div className="movement-actions">
                <button>Add Movement</button>
                <button>Update Movement</button>
                <button>Delete Movement</button>
            </div>
           
        </div>
    );
}

export default StockMovement;
