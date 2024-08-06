import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaTachometerAlt, FaCubes, FaInfoCircle, FaClipboardList, FaExchangeAlt, FaRedo, FaChartLine, FaUserShield } from 'react-icons/fa';

function Navbar({ isSidebarCollapsed }) {
    return (
        <nav className={`navbar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <ul className="navbar-list">
                <li>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaTachometerAlt />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/inventory-tracking" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaCubes />
                        <span>Inventory Tracking</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/product-info-management" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaInfoCircle />
                        <span>Product Info</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/order-management" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaClipboardList />
                        <span>Order Management</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/stock-movement" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaExchangeAlt />
                        <span>Stock Movement</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reorder-management" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaRedo />
                        <span>Reorder Management</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reporting-analytics" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaChartLine />
                        <span>Reporting & Analytics</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user-access-control" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaUserShield />
                        <span>User Access</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
