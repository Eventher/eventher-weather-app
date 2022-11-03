/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="links">
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
      </div>
      <div>
        <ul className="website-map">
          <li className="listItem">
            <Link to="/home">Home</Link>
          </li>
          <li className="listItem">
            <Link to="/events">Events</Link>
          </li>
          <li className="listItem">
            <Link to="/suggestions">Suggestions</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
