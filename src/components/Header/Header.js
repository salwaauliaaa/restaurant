import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h2 className="logo">Yummy</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
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
