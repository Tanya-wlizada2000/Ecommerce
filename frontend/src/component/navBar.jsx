import { useState } from "react";
import "./navBar.css";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// Navebar
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // set isMenuOpen
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  //  set isDropdownOpen
  return (
  //    isDropdownOpen
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Logo
        </Link>
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <div className="navbar-item dropdown" onClick={toggleDropdown}>
            About
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/Incom" className="dropdown-item">
                  About the company
                </Link>
                <Link to="/Certificate" className="dropdown-item">
                  Certificate
                </Link>
              </div>
            )}
          </div>
          <div className="navbar-item dropdown" onClick={toggleDropdown}>
            Product
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/service1" className="dropdown-item">
                  Roll packaging
                </Link>
                <Link to="/service2" className="dropdown-item">
                  Ready-made packaging
                </Link>
              </div>
            )}
          </div>
          <Link to="/Contact" className="navbar-item">
            Contact
          </Link>
        </div>
        {/* The Icons */}
        <Link to="/Contact" className="phone-icone">
          <IoCallOutline size={40} className="icone" />
        </Link>
        <button className="navbar-toggler" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">
              <IoMdClose />
            </span>
          ) : (
            <span className="hamburger-icon">
              <IoIosMenu />
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
