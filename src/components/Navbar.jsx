import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assests/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      
      <div className="logo-wrap">
        <img src={logo} alt="ACCS IN-Touch" className="logo" />
      </div>

      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
      </nav>

      
      <div className="nav-right">
        <div className="searchbar" role="search">
          <input type="text" placeholder="Search" aria-label="Search" />
          <div className="search-icon" aria-hidden="true">
            <SearchIcon fontSize="large" />
          </div>
        </div>

        <div className="nav-actions">
          <IconButton aria-label="wishlist" size="large">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="cart" size="large">
            <ShoppingBagOutlinedIcon />
          </IconButton>
          <IconButton aria-label="account" size="large">
            <AccountCircleTwoToneIcon />
          </IconButton>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar;
