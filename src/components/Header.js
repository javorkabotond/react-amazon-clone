import React from 'react';
import logo from '../images/amazon_PNG11.png';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className="header">
      <Link to="/"> 
        <img 
          className="header_logo"
          src={logo}
          alt="" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput"/>
        <SearchIcon className="header_searchIcon"/>
      </div>
     
    </nav>
  )
}

export default Header
