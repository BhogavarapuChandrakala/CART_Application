import React from "react";
import "./Footer.css";
import logo from "../assests/logo.png"; 
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="ACCS IN-TOUCH" className="footer-logo" />
        <h3 className="footer-title">ACCS IN-TOUCH</h3>
        <p className="footer-text">One Stop for your Hair Accessories</p>
        <div className="footer-socials">
          <a href="#"><FacebookIcon fontSize="small" /></a>
          <a href="#"><TwitterIcon fontSize="small" /></a>
          <a href="#"><PinterestIcon fontSize="small" /></a>
          <a href="#"><InstagramIcon fontSize="small" /></a>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <h4>Categories</h4>
          <ul>
            <li>Claw Clips</li>
            <li>Earring</li>
            <li>Scrunchies</li>
            <li>Hair Bows</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Our Company</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
