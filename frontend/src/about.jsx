import { NavbarButton } from "./component/navbarButton"; // Importing a custom button component
import { Footer } from "./footer"; // Importing the Footer component
import { Header } from "./header"; // Importing the Header component
import "./about.css"; // Importing the CSS stylesheet for this component
import { Link } from "react-router-dom"; // Importing Link component for navigation
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
  const title = "Get the presentation";

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
                background:
                  "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%)",
              }}
            />
          </a>

          <Link to="/Contact">
            <IoCallOutline
              size={50}
              style={{
                position: "fixed",
                bottom: "80px",
                right: "20px",
                zIndex: 99,
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
                background: "  #e5750f",
              }}
            />
          </Link>

          {/* Main content section */}
          <div className="about">
            {/* Section for introductory text */}
            <div className="aboutText">
              <p>
                DOY PACK China has been confidently holding leading positions
                in the market of flexible packaging manufacturers for various
                types of production for over eight years. Thanks to unique
                technologies, we are ready to offer a wide range of solutions
                from flexible packaging and injection molding to design and
                production of bottling lines .<br /> <br /> Together with our
                partners and our constantly developing R&D center, we work to
                ensure that the company offers only innovative technologies that
                take care of the environment.
                <br /> <br /> Our specialty is the design and manufacture of
                filling lines and pasteurization tunnels for finished packaging.
                We can offer a ready-made solution or develop a custom solution
                for your business.
              </p>

              <p>
                DOY PACK China has been confidently holding leading positions
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
                <img src="aboutimg.jpg" alt="aboutimg.jpg" />{" "}
                {/* Image with alt text */}
              </div>
              <div className="Text">
                <h2>Mission and Vision</h2>
                <p>
                  Continuous development is our priority. DOY PACK specializes
                  in the production of high-performance flexible packaging.
                  Quality, service and innovative solutions for our customers
                  are our top priorities.
                  <br /> <br /> Our strength is the synergy of effective
                  technologies and innovative developments to solve our clients’
                  problems.
                  <br /> <br /> Sustainable development is our daily task in
                  searching for technological solutions with care for the
                  environment and the future. We invest in motivated and
                  talented people!
                </p>
              </div>
            </div>

            {/* Repeated sections for consistency */}
            <div className="aboutImgText">
              <div className="Text">
                <h2>Team</h2>
                <p>
                  Our team of professionals, based on the global experience of
                  the entire group of companies, will help you choose the best
                  solution in the field of flexible packaging for the
                  development and improvement of your business.
                  <br /> <br /> We will provide qualified support during the
                  production process. Flexible integration with the group's
                  factories around the world to solve the most complex problems.
                </p>
              </div>

              <div className="aboutImg">
                <img src="teamimg.jpg" alt="teamimg.jpg" />{" "}
                {/* Image with alt text */}
              </div>
            </div>

            {/* Further repeated sections */}
            <div className="aboutImgText">
              <div className="aboutImg">
                <img src="devimg.jpg" alt="aboutimg.jpg" />{" "}
                {/* Image with alt text */}
              </div>
              <div className="Text">
                <h2>Sustainable development</h2>
                <p>
                  Our innovative and reliable ready-made packaging solutions:{" "}
                  <br />
                  <br />
                  Circular economy <br />
                  Recyclability, especially of flexible packaging for single
                  use. Climate <br />
                  Reducing the environmental impact of packaging in terms of CO2
                  emissions.
                  <br /> Safety Safety of consumers, especially children, who
                  use ready-made packaging. <br />
                  What do we do?
                  <br />
                  <div className="line"></div>
                  installation of a cogeneration plant to optimize fossil fuel
                  consumption and limit CO2 emissions;
                  <br />
                  <div className="line"></div>
                  implementing an energy conservation program to reduce the
                  total TOE (tonnes of oil equivalent) and carbon footprint of
                  our operations; <br />
                  <div className="line"></div>
                  implementation of a clean energy project through a solar
                  photovoltaic system; <br />
                  <div className="line"></div>
                  reduction of water consumption by replacing cooling systems;
                  <br />
                  <div className="line"></div>
                  installation of a solvent recovery unit to reduce VOC
                  (Volatile Organic Substances) emissions;
                  <br />
                  <div className="line"></div>
                  ISO 14001 and SMETA 4-Pillar certification.
                </p>
              </div>
            </div>

            {/* Repeated sections for consistency */}
            <div className="aboutImgText">
              <div className="Text">
                <h2>Social responsibility</h2>
                <p>
                  The DOY PACK Group of Companies has created the SociAL
                  Foundation to invest part of the Group's revenues in support
                  of initiatives aimed at social inclusion, economic assistance
                  and the promotion of culture: <br />
                  <div className="line"></div>financial support for medical
                  institutions;<br />
                  <div className="line"></div> support for humanitarian organizations;
                  <br />
                  <div className="line"></div>assistance to people affected by natural disasters. <br /><br />
                  <div className="line"></div> The main
                  principles of the fund's work: <br />
                  <div className="line"></div>justice and social equality;
                  <br />
                  <div className="line"></div>democratic participation; <br />
                  <div className="line"></div>freedom and personal security; <br />
                  <div className="line"></div>trust
                  and solidarity between generations.
                  <br /><br />
                  Our production sites around the world promote local initiatives and manage them themselves.
                </p>
              </div>

              <div className="aboutImg">
                <img src="susimg.jpg" alt="teamimg.jpg"  height={400}/>{" "}
                {/* Image with alt text */}
              </div>
            </div>

            {/* Section for downloading company presentation */}
            <div className="lastAbout">
              <div className="lastimg">
                <img src="" alt="download-cover.png" />{" "}
                {/* Image with alt text */}
              </div>

              <div className="textlast">
                <Link to="/" className="navbar-logo">
                  <img src="image.png" alt="image.png" width={60} />
                </Link>{" "}
                {/* Navigation link */}
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
