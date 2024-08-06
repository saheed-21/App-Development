// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FormStyles.css';

// Import the image
import ImgBack from '../assets/img-back.jpeg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        if (email === 'test@example.com' && password === 'password') { // Replace this with real authentication logic
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-register-container">
            <div className="image-container">
                <img src={ImgBack} alt="Inventory Management" />
            </div>
            <div className="form-card-container">
                <div className="card">
                    <h2>Login</h2>
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
                        <button type="submit">Login</button>
                    </form>
                    <div className="links">
                        <span>Don't have an account? <a href="/register">Register</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
