import { Footer } from "./footer";
import { Header } from "./header";
import { CiSaveDown2 } from "react-icons/ci";
import "./certificate.css";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

// Main component for the Certificate Page
const CertificatePage = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <>
      {/* Render the Header component */}
      <Header />

      {/* Main container for the page content */}
      <div className="container">
        <div className="itemsContainer">
          {/* Back-to-top button */}
          <a onClick={scrollToTop}>
            <FaArrowUp
              size={50}
              style={{
                position: "fixed",
                bottom: "40px",
                right: "20px",
                zIndex: 99,
                cursor: "pointer",
                padding: "50px",
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

          {/* Main content area */}
          <div className="certificatePage">
            {/* First set of images and text */}
            <div className="certicImg">
              {/* Repeated block for certificate images and text */}
              <div className="certificImgText">
                <a href="certificate.jpg">
                  <img src="certificate.jpg" alt="certificate" />
                </a>
                <p>BRC GS PACKAGING 2021</p>
              </div>

              <div className="certificImgText">
                <a href="certificate.jpg">
                  <img src="certificate.jpg" alt="certificate" />
                </a>
                <p>BRC GS PACKAGING 2021</p>
              </div>

              <div className="certificImgText">
                <a href="certificate.jpg">
                  <img src="certificate.jpg" alt="certificate" />
                </a>
                <p>BRC GS PACKAGING 2021</p>
              </div>
            </div>

            {/* Second set of images and text */}
            <div className="ccerticImg2">
              {/* Repeated block for additional certificate images and text */}
              <div className="certificImgText2">
                <a href="certificate.jpg" >
                  <img src="certificate.jpg" alt="certificate" />
                </a>
                <p>BRC GS PACKAGING 2021</p>
              </div>

              <div className="certificImgText2">
                <a href="certificate.jpg">
                  <img src="certificate.jpg" alt="certificate" />
                </a>
                <p>BRC GS PACKAGING 2021</p>
              </div>
            </div>

            {/* Text section for Investor Relations */}
            <div className="certfText">
              <h1>Investor Relations</h1>

              {/* Section with icons and links to audit reports */}
              <div className="certTextIcon">
                <div className="cert">
                  <div className="certIcon">
                    <CiSaveDown2
                      size={30}
                      style={{
                        color: "orange",
                      }}
                    />
                  </div>
                  <div className="certText">
                    <a href="/">
                      Audit report <span>[1.11 Mb]</span>
                    </a>
                  </div>
                </div>

                <div className="cert">
                  <div className="certIcon">
                    <CiSaveDown2
                      size={30}
                      style={{
                        color: "orange",
                      }}
                    />
                  </div>
                  <div className="certText">
                    <a href="/">
                      Audit report <span>[1.11 Mb]</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Another section with icons and links to audit reports */}
              <div className="certTextIcon">
                <div className="cert">
                  <div className="certIcon">
                    <CiSaveDown2
                      size={30}
                      style={{
                        color: "orange",
                      }}
                    />
                  </div>
                  <div className="certText">
                    <a href="/">
                      Audit report <span>[1.11 Mb]</span>
                    </a>
                  </div>
                </div>

                <div className="cert">
                  <div className="certIcon">
                    <CiSaveDown2
                      size={30}
                      style={{
                        color: "orange",
                      }}
                    />
                  </div>
                  <div className="certText">
                    <a href="/">
                      Audit report <span>[1.11 Mb]</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render the Footer component */}
      <Footer />
    </>
  );
};

export { CertificatePage };
