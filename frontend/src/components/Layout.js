// src/components/Layout.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
import '../styles/Layout.css';

function Layout({ children }) {
    const [isSidebarHidden, setSidebarHidden] = useState(false);

    const toggleSidebar = () => {
        setSidebarHidden(!isSidebarHidden);
    };

    return (
        <div className={`layout ${isSidebarHidden ? 'sidebar-hidden' : ''}`}>
            <TopNavbar 
                onToggleSidebar={toggleSidebar} 
                username="John Doe" 
                profileImageUrl="path/to/profile-image.jpg" 
            />
            <div className="content">
                <Navbar />
                <div className="main-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
