import React from 'react';
import '../styles/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faBoxOpen, faChartLine, faDollarSign, faClipboardList, faTruck, faUsers, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div className="dashboard-sections">
                <div className="dashboard-card purchases">
                    <FontAwesomeIcon icon={faShoppingBag} className="card-icon" />
                    <div className="card-content">
                        <h3>PURCHASES</h3>
                        <p>1671405388.73</p>
                        <span>New Purchase</span>
                    </div>
                </div>
                <div className="dashboard-card inventory">
                    <FontAwesomeIcon icon={faBoxOpen} className="card-icon" />
                    <div className="card-content">
                        <h3>INVENTORY</h3>
                        <p>894</p>
                        <span>New Inventory</span>
                    </div>
                </div>
                <div className="dashboard-card sales">
                    <FontAwesomeIcon icon={faChartLine} className="card-icon" />
                    <div className="card-content">
                        <h3>SALES</h3>
                        <p>2889695579.63</p>
                        <span>New Sale</span>
                    </div>
                </div>
                <div className="dashboard-card profit">
                    <FontAwesomeIcon icon={faDollarSign} className="card-icon" />
                    <div className="card-content">
                        <h3>PROFIT</h3>
                        <p>2813631873.43</p>
                        <span>New Sale</span>
                    </div>
                </div>
                <div className="dashboard-card sale-orders">
                    <FontAwesomeIcon icon={faClipboardList} className="card-icon" />
                    <div className="card-content">
                        <h3>SALE ORDERS</h3>
                        <p>1933</p>
                        <span>New Sale</span>
                    </div>
                </div>
                <div className="dashboard-card purchase-orders">
                    <FontAwesomeIcon icon={faShoppingCart} className="card-icon" />
                    <div className="card-content">
                        <h3>PURCHASE ORDERS</h3>
                        <p>362</p>
                        <span>New Purchase</span>
                    </div>
                </div>
                <div className="dashboard-card suppliers">
                    <FontAwesomeIcon icon={faTruck} className="card-icon" />
                    <div className="card-content">
                        <h3>SUPPLIERS</h3>
                        <p>212</p>
                        <span>New Suppliers</span>
                    </div>
                </div>
                <div className="dashboard-card customers">
                    <FontAwesomeIcon icon={faUsers} className="card-icon" />
                    <div className="card-content">
                        <h3>CUSTOMERS</h3>
                        <p>856</p>
                        <span>New Customer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
