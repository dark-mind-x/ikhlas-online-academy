import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the styles

export default function LoginPage() {
  const [userType, setUserType] = useState('student'); // 'student' or 'faculty'
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add real backend logic later.
    // For now, let's just simulate a successful login.
    alert(`Logging in as ${userType.toUpperCase()}...`);
    navigate('/dashboard'); // We will build this page next
  };

  return (
    <div className="login-container">
      
      {/* LEFT SIDE: Illustration */}
      <div className="login-left">
        <img 
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740" 
          alt="Login Illustration" 
          className="login-illustration"
        />
        <h2>Welcome Back!</h2>
        <p>Your learning journey continues here.</p>
      </div>

      {/* RIGHT SIDE: Form */}
      <div className="login-right">
        <div className="login-box">

            {/* --- NEW ADDITION: Mobile Only Logo --- */}
          <div className="mobile-logo">
            Ikhlas<span style={{ color: '#FFB400' }}>Academy</span>
          </div>
          {/* -------------------------------------- */}
          
          {/* TABS */}
          <div className="tabs">
            <div 
              className={`tab ${userType === 'student' ? 'active' : ''}`}
              onClick={() => setUserType('student')}
            >
              Student Login
            </div>
            <div 
              className={`tab ${userType === 'faculty' ? 'active' : ''}`}
              onClick={() => setUserType('faculty')}
            >
              Faculty Login
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder={userType === 'student' ? "student@example.com" : "faculty@ikhlasacadamy.com"}
                required 
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>

            <button type="submit" className="login-submit-btn">
              Access {userType === 'student' ? 'Student' : 'Faculty'} Dashboard
            </button>
          </form>

          <p style={{marginTop: '20px', textAlign: 'center', fontSize: '0.9rem', color: '#666'}}>
            Don't have an account? <span style={{color: '#FFB400', cursor: 'pointer'}}>Contact Admin</span>
          </p>

        </div>
      </div>

    </div>
  );
}