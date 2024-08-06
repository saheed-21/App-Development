import React from 'react';

import '../styles/InventoryTracking.css';

function InventoryTracking() {
    return (
        <div className="inventory-tracking">
            <h3>Inventory Tracking</h3>
            <p>Real-time tracking of inventory levels and locations.</p>
            <div className="inventory-stats">
                <div className="stat">
                    <h4>Total Items</h4>
                    <p>1500</p>
                </div>
                <div className="stat">
                    <h4>Out of Stock</h4>
                    <p>25</p>
                </div>
                <div className="stat">
                    <h4>Low Stock</h4>
                    <p>75</p>
                </div>
            </div>
            <div className="inventory-list">
                <h4>Recent Inventory Updates</h4>
                <ul>
                    <li>Item A - 50 units added</li>
                    <li>Item B - 20 units removed</li>
                    <li>Item C - 100 units transferred</li>
                    {/* Add more inventory updates here */}
                </ul>
            </div>
            <div className="inventory-actions">
                <button>Add New Item</button>
                <button>Update Stock</button>
                <button>Transfer Stock</button>
            </div>
        </div>
    );
}

export default InventoryTracking;
