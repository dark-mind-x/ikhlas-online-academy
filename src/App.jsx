import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function Layout({ children }) {
  const location = useLocation();
  // Hide Navbar if the path is "/login"
  const showNavbar = location.pathname !== '/login';

  return (
    <>
      {showNavbar && <NavBar />}
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* We will add Dashboard here later */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;