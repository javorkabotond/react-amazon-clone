import React from 'react'
import logo from '../images/amazon_PNG11.png'
import './Header.css'
import { Link, useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase'



function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

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
      <div className="header_nav">
      {/*
        to={!user  && '/login'}
      */}
        <Link to={"/login"} className="header_link">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello: {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div  className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
     
    </nav>
  )
}

export default Header
