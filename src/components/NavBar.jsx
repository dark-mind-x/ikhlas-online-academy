import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css';

function NavBar () {
    
    const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);
    
    return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Ikhlas<span style={{ color: 'white' }}>Academy</span>
      </Link>

      {/* Hamburger Icon (Visible only on Mobile) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* The Menu Links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/courses" onClick={toggleMenu}>Courses</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        
        {/* Mobile-only Login button inside the menu */}
        <button 
          className="login-btn mobile-btn" 
          onClick={() => { toggleMenu(); navigate('/login'); }}
        >
          Login
        </button>
      </div>

      {/* Desktop Login button (Hidden on Mobile) */}
      <button 
        className="login-btn desktop-btn" 
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </nav>
  );
}

export default NavBar