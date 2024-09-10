import "./footer.css"; // Import the CSS stylesheet for styling the footer
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const Footer = () => {
  return (
    <>
      <div className="container"> {/* Container for the overall footer layout */}
        <div className="itemsContainer"> {/* Container for footer items */}
          <div className="footerItem"> {/* Flexbox container for footer sections */}
            {/* First section: Logo and company description */}
            <div className="logoText">
              <Link to="/" className="navbar-logo"> {/* Link to home with logo class */}
                Logo
              </Link>
              <h4>
                Gualapack is a world leader in the production of <br />ready-made bags
                with closures and a global player <br />in flexible packaging.
              </h4>
              <p>
                Intellectual property rights to trademarks <br /> owned by the owners
                of these trademarks.
              </p>
            </div>

            {/* Second section: Product links */}
            <div className="logoText">
              <h2>Product</h2>
              <ul>
                <li>
                  <Link to="/" className="links">Roll packaging</Link> {/* Link to roll packaging */}
                </li>
                <li>
                  <Link to="/" className="links">Ready-made packaging</Link> {/* Link to ready-made packaging */}
                </li>
              </ul>
            </div>

            {/* Third section: Contact information */}
            <div className="logoText">
              <h2>Contact</h2>
              <div className="contact">
                <h3>Telephone:</h3>
                <Link to="/" className="links"> +380 542 701 520</Link> {/* Contact phone number */}
              </div>
              <div className="contact">
                <h3>E-mail:</h3>
                <Link to="/" className="links"> sales.ua@gualapack.com</Link> {/* Email address */}
                <Link to="/" className="links">sales.pl@gualapack.com</Link> {/* Second email address */}
              </div>
              <div className="contact">
                <h3>Office address in Ukraine:</h3>
                <p>40020, m. Sumy, Peremohy ave., 147/4</p> {/* Office address */}
              </div>
            </div>

          </div>

          {/* Last part: Footer bottom section */}
          <div className="lastpart">
            <p>© 2024 “GUALAPACK UKRAINE” LLC</p> {/* Copyright notice */}
            <Link to="/">Privacy Policy</Link> {/* Link to privacy policy */}
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
