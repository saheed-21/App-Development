import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InventoryTracking from './components/InventoryTracking';
import ProductInfoManagement from './components/ProductInfoManagement';
import OrderManagement from './components/OrderManagement';
import StockMovement from './components/StockMovement';
import ReorderManagement from './components/ReorderManagement';
import ReportingAndAnalytics from './components/ReportingAndAnalytics';
import UserAccessControl from './components/UserAccessControl';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';

function App() {
    const [isSidebarHidden, setSidebarHidden] = useState(false);

    const toggleSidebar = () => {
        setSidebarHidden(!isSidebarHidden);
    };

    return (
        <Router>
            <Content toggleSidebar={toggleSidebar} isSidebarHidden={isSidebarHidden} />
        </Router>
    );
}

function Content({ toggleSidebar, isSidebarHidden }) {
    const location = useLocation();
    const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

    return (
        <>
            {!hideNavbar && <TopNavbar onToggleSidebar={toggleSidebar} username="John Doe" profileImageUrl="profile.jpg" />}
            {!hideNavbar && <Navbar isSidebarHidden={isSidebarHidden} />}
            <div className={!hideNavbar ? 'main-content' : ''}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/inventory-tracking" element={<InventoryTracking />} />
                    <Route path="/product-info-management" element={<ProductInfoManagement />} />
                    <Route path="/order-management" element={<OrderManagement />} />
                    <Route path="/stock-movement" element={<StockMovement />} />
                    <Route path="/reorder-management" element={<ReorderManagement />} />
                    <Route path="/reporting-analytics" element={<ReportingAndAnalytics />} />
                    <Route path="/user-access-control" element={<UserAccessControl />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
