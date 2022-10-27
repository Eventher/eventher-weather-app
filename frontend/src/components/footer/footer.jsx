/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/">
        <FaTwitterSquare className="social-media" />
      </a>
      <a href="https://www.instagram.com/">
        <FaInstagramSquare className="social-media" />
      </a>
      <a href="https://www.facebook.com/">
        <FaFacebookSquare className="social-media" />
      </a>
      <p id="copyrights">&copy; 2022 Eventher</p>
    </footer>
  );
}
export default Footer;
