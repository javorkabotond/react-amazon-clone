import React from 'react';
import logo from '../images/amazon_PNG11.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      <Link to="/"> 
        <img 
          className="header_logo"
          src={logo}
          alt="" />
      </Link>
    </nav>
  )
}

export default Header
