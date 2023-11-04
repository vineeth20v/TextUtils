import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const { mode, toggleMode, name } = props;
  const textColor = mode === 'light' ? '#FAF9F6' : '#332940';
  const navColor = mode === 'light' ? '#FFFFFF' : '#042743';
  const linkStyle = {
    color: textColor,
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: navColor }}>
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ color: textColor }}>
          {name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="Home" style={linkStyle}>Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/about" style={linkStyle}>About</Link>
              
            </li>
          </ul>
          <div className={`form-check form-switch text-${mode === 'light' ? 'black' : 'white'}`}>
          <input
  onClick={toggleMode}
  className="form-check-input"
  type="checkbox"
  role="switch"
  id="flexSwitchCheckChecked"
  checked={mode === 'light'}
/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{ color: textColor }}>
              Enable dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}












