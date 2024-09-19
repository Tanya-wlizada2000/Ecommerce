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
              <img src="/image.png" alt="" width={60}/>
              </Link>
              <h4>
                DOY PACK is a world leader in the production of <br />ready-made bags
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
                  <Link to="/service1" className="links">Stand Up Pouch</Link> {/* Link to roll packaging */}
                </li>
                <li>
                  <Link to="/service2" className="links">Spout Pouch</Link> {/* Link to ready-made packaging */}
                </li>
                <li>
                  <Link to="/service3" className="links">Gusseted Pouch</Link> {/* Link to ready-made packaging */}
                </li>
                <li>
                  <Link to="/service4" className="links">Roll Film</Link> {/* Link to ready-made packaging */}
                </li>
                <li>
                  <Link to="/service5" className="links">Shaped & Transparent</Link> {/* Link to ready-made packaging */}
                </li>
              </ul>
            </div>

            {/* Third section: Contact information */}
            <div className="logoText">
              <h2>Contact</h2>
              <div className="contact">
                <h3>Telephone:</h3>
                <Link to="/" className="links"> Tel: +8617 813 089921 </Link> 
                <Link to="/" className="links"> WhatsApp: +7964 809 8632</Link> {/* Contact phone number */}
              </div>
              <div className="contact">
                <h3>E-mail:</h3>
                <Link to="/" className="links"> tajsteel567@gmail.com</Link> {/* Email address */}
              </div>
              <div className="contact">
                <h3>Office address in China:</h3>
                <p>Dongguang Country, Cangzhou<br/> City, Hebel Province, China</p> {/* Office address */}
              </div>
            </div>

          </div>

          {/* Last part: Footer bottom section */}
          <div className="lastpart">
            <div className="lastpartcon">
            <p>Dongguang Yalei Plastic Industry Co., Ltd.</p> {/* Copyright notice */}
            <Link to="/">Privacy Policy</Link> {/* Link to privacy policy */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
