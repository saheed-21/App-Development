// src/components/Profile.js
import React from 'react';
import '../styles/Profile.css';

function Profile() {
    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        autocomplete="username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="current-password">Current Password</label>
                    <input
                        type="password"
                        id="current-password"
                        name="current-password"
                        autocomplete="current-password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-password">New Password</label>
                    <input
                        type="password"
                        id="new-password"
                        name="new-password"
                        autocomplete="new-password"
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default Profile;
