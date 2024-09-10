import { NavbarButton } from "./component/navbarButton"; // Importing a custom button component
import { Footer } from "./footer"; // Importing the Footer component
import { Header } from "./header"; // Importing the Header component
import "./incom.css"; // Importing the CSS stylesheet for this component
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import { FaArrowUp } from "react-icons/fa"; // Importing FaArrowUp icon for scroll-to-top button
import { IoCallOutline } from "react-icons/io5";

const IncomPage = () => {
  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  // Title for the NavbarButton
  const title = 'Get the presentation';

  return (
    <>
      <Header /> {/* Render the Header component */}

      <div className="container">
        <div className="itemsContainer">
          {/* Scroll-to-top button */}
          <a onClick={scrollToTop}>
            <FaArrowUp
              size={50}
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 99,
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
                background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%)",
              }}
            />
          </a>

          <Link to="/Contact"><IoCallOutline  size={50} style={{
        
        position: "fixed",
        bottom: "80px",
        right: "20px",
        zIndex: 99,
        cursor: "pointer",
        padding: "10px",
        borderRadius: "50%",
        color: "white",
        background:"  #e5750f",
        
      }}/></Link>

          {/* Main content section */}
          <div className="about">
            {/* Section for introductory text */}
            <div className="aboutText">
              <p>
                Gualapack Ukraine has been confidently holding leading positions
                in the market of flexible packaging manufacturers for various
                types of production for over eight years. Thanks to unique
                technologies, we are ready to offer a wide range of solutions
                from flexible packaging and injection molding to design and
                production of bottling lines <br /> <br />. Together with our
                partners and our constantly developing R&D center, we work to
                ensure that the company offers only innovative technologies that
                take care of the environment.
                <br /> <br /> Our specialty is the design and manufacture of
                filling lines and pasteurization tunnels for finished packaging.
                We can offer a ready-made solution or develop a custom solution
                for your business.
              </p>

              <p>
                Gualapack Ukraine has been confidently holding leading positions
                in the market of flexible packaging manufacturers for various
                types of production for over eight years. Thanks to unique
                technologies, we are ready to offer a wide range of solutions
                from flexible packaging and injection molding to design and
                production of bottling lines. <br /> <br />
                Together with our partners and our constantly developing R&D
                center, we work to ensure that the company offers only
                innovative technologies that take care of the environment.{" "}
                <br /> <br />
                Our specialty is the design and manufacture of filling lines and
                pasteurization tunnels for finished packaging. We can offer a
                ready-made solution or develop a custom solution for your
                business.
              </p>
            </div>

            {/* Section for alternating image and text */}
            <div className="aboutImgText">
              <div className="aboutImg">
                <img src="aboutimg.jpg" alt="aboutimg.jpg" /> {/* Image with alt text */}
              </div>
              <div className="Text">
                <h2>About Gualapack Ukraine</h2>
                <p>
                  Continuous development is our priority. Gualapack specializes
                  in the production of high-performance flexible packaging.
                  Quality, service and innovative solutions for our customers
                  are our top priorities.<br /> <br /> Our strength is the synergy of
                  effective technologies and innovative developments to solve
                  our clients’ problems.<br /> <br /> Sustainable development is our daily
                  task in searching for technological solutions with care for
                  the environment and the future. We invest in motivated and
                  talented people!
                </p>
              </div>
            </div>

            {/* Repeated sections for consistency */}
            <div className="aboutImgText">
              <div className="Text">
                <h2>About Gualapack Ukraine</h2>
                <p>
                  Continuous development is our priority. Gualapack specializes
                  in the production of high-performance flexible packaging.
                  Quality, service and innovative solutions for our customers
                  are our top priorities.<br /> <br /> Our strength is the synergy of
                  effective technologies and innovative developments to solve
                  our clients’ problems.<br /> <br /> Sustainable development is our daily
                  task in searching for technological solutions with care for
                  the environment and the future. We invest in motivated and
                  talented people!
                </p>
              </div>

              <div className="aboutImg">
                <img src="aboutimg.jpg" alt="aboutimg.jpg" /> {/* Image with alt text */}
              </div>
            </div>

            {/* Further repeated sections */}
            <div className="aboutImgText">
              <div className="aboutImg">
                <img src="aboutimg.jpg" alt="aboutimg.jpg" /> {/* Image with alt text */}
              </div>
              <div className="Text">
                <h2>About Gualapack Ukraine</h2>
                <p>
                  Continuous development is our priority. Gualapack specializes
                  in the production of high-performance flexible packaging.
                  Quality, service and innovative solutions for our customers
                  are our top priorities.<br /> <br /> Our strength is the synergy of
                  effective technologies and innovative developments to solve
                  our clients’ problems.<br /> <br /> Sustainable development is our daily
                  task in searching for technological solutions with care for
                  the environment and the future. We invest in motivated and
                  talented people!
                </p>
              </div>
            </div>

            {/* Section for downloading company presentation */}
            <div className="lastAbout">
              <div className="lastimg">
                <img src="download-cover.png" alt="download-cover.png" /> {/* Image with alt text */}
              </div>

              <div className="textlast">
                <Link to="/" className="navbar-logo">Logo</Link> {/* Navigation link */}
                <p>Download company presentation in PDF format:</p>
                <a href="/path-to-your-file-1" download>
                  <NavbarButton title={title} /> {/* Custom button component */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export { IncomPage }; // Export the IncomPage component for use in other parts of the application
