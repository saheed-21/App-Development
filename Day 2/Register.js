// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FormStyles.css';

// Import the image
import ImgBack from '../assets/img-back.jpeg';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Register details:', { email, password, confirmPassword });
        navigate('/dashboard');
    };

    return (
        <div className="login-register-container">
            <div className="image-container">
                <img src={ImgBack} alt="Inventory Management" />
            </div>
            <div className="form-card-container">
                <div className="card">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="Confirm Password"
                            />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                    <div className="links">
                        <span>Already have an account? <a href="/login">Login</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
