import React from 'react';
import '../styles/OrderManagement.css';


function OrderManagement() {
    return (
        <div className="order-management">
            <h3>Order Management</h3>
            <p>Manage purchase, sales, and transfer orders.</p>
            <div className="order-details">
                <div className="detail">
                    <label>Order ID:</label>
                    <input type="text" placeholder="Enter order ID" />
                </div>
                <div className="detail">
                    <label>Customer Name:</label>
                    <input type="text" placeholder="Enter customer name" />
                </div>
                <div className="detail">
                    <label>Order Date:</label>
                    <input type="date" />
                </div>
                <div className="detail">
                    <label>Status:</label>
                    <select>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="canceled">Canceled</option>
                    </select>
                </div>
            </div>
            <div className="order-actions">
                <button>Add Order</button>
                <button>Update Order</button>
                <button>Delete Order</button>
            </div>
        </div>
    );
}

export default OrderManagement;
