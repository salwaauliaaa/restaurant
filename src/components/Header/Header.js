import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h2 className="logo">Yummy</h2>
        <ul className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/chefs" className="nav-link">Chef</Link>
          </li>
          <li className="nav-item">
            <Link to="/table" className="book-btn">Book A Table</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
