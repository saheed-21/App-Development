import React from 'react';
import '../styles/ProductInfoManagement.css';


function ProductInfoManagement() {
    return (
        <div className="product-info-management">
            <h3>Product Information Management</h3>
            <p>Manage product details, SKUs, prices, and more.</p>
            <div className="product-details">
                <div className="detail">
                    <label>Product Name:</label>
                    <input type="text" placeholder="Enter product name" />
                </div>
                <div className="detail">
                    <label>SKU:</label>
                    <input type="text" placeholder="Enter SKU" />
                </div>
                <div className="detail">
                    <label>Price:</label>
                    <input type="number" placeholder="Enter price" />
                </div>
                <div className="detail">
                    <label>Supplier:</label>
                    <input type="text" placeholder="Enter supplier details" />
                </div>
                <div className="detail">
                    <label>Description:</label>
                    <textarea placeholder="Enter product description"></textarea>
                </div>
            </div>
            <div className="product-actions">
                <button>Add Product</button>
                <button>Update Product</button>
                <button>Delete Product</button>
            </div>
           
        </div>
    );
}

export default ProductInfoManagement;
