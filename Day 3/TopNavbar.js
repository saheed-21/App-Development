// src/components/TopNavbar.js
import React from 'react';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/TopNavbar.css';
import profileImage from '../assets/Elon_Musk-1.png';
import { useState } from 'react';

function TopNavbar({ username, profileImageUrl = profileImage, onToggleSidebar }) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="top-navbar">
            <div className="hamburger-icon" onClick={onToggleSidebar}>
                <FaBars />
            </div>
            <div className="profile-section">
                <span className="username">{username}</span>
                <img src={profileImageUrl} alt="Profile" className="profile-icon" />
                <FaCaretDown className="caret-icon" onClick={toggleDropdown} />
                {isDropdownVisible && (
                    <div className="dropdown-menu">
                        <Link to="/profile">Profile</Link>
                        <a href="#logout" onClick={handleLogout}>Logout</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopNavbar;
