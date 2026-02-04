import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './NavBar.css';

function NavBar () {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
            Tutor<span style={{color: 'white'}}Pro></span>
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <button 
                className="login-btn"
                onClick={() => navigate('/login')}
            >Login</button>
        </nav>
    );
}

export default NavBar