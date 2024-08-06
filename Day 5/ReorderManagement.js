import React from 'react';
import '../styles/ReorderManagement.css';


function ReorderManagement() {
    return (
        <div className="reorder-management">
            <h3>Reorder Management</h3>
            <p>Manage reorder points and alerts.</p>
            <div className="reorder-details">
                <div className="detail">
                    <label>Product Name:</label>
                    <input type="text" placeholder="Enter product name" />
                </div>
                <div className="detail">
                    <label>Reorder Point:</label>
                    <input type="number" placeholder="Enter reorder point" />
                </div>
                <div className="detail">
                    <label>Current Stock:</label>
                    <input type="number" placeholder="Enter current stock" />
                </div>
                <div className="detail">
                    <label>Supplier:</label>
                    <input type="text" placeholder="Enter supplier name" />
                </div>
                <div className="detail">
                    <label>Email Alert:</label>
                    <input type="email" placeholder="Enter email for alerts" />
                </div>
            </div>
            <div className="reorder-actions">
                <button>Add Reorder Point</button>
                <button>Update Reorder Point</button>
                <button>Remove Reorder Point</button>
            </div>
            
        </div>
    );
}

export default ReorderManagement;
