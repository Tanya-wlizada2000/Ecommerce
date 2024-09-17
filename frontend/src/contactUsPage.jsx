import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import "./contactUsPage.css";
import { FaArrowUp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
export const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    describe: "",
  });

  // State to manage submission status messages
  const [status, setStatus] = useState("");

  // Handle changes to form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Make a POST request to the backend with form data
      const response = await fetch("http://127.0.0.1:8000/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // On success, show a success message and reset form data
        setStatus("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          describe: "",
        });
      } else {
        // Handle errors by displaying the error message
        const errorData = await response.json();
        setStatus(`Error: ${errorData.detail || "Something went wrong"}`);
      }
    } catch (error) {
      // Handle network errors
      setStatus(`Error: ${error.message}`);
    }
  };

  // Function to scroll the window to the top with a smooth scrolling effect
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This will add a smooth scrolling effect
    });
  };

  return (
    <>
      {/* Render the Header component */}
      <Header />

      {/* Main container for the contact form page */}
      <div className="container">
        <div className="itemsContainer">
          <a
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 99,
              cursor: "pointer",
              padding: "5px",
              borderRadius: "50%",
              color: "white",
              background:
                "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%)",
            }}
          >
            <FaArrowUp size={40} /> {/* Scroll to top icon */}
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
          {/* Section for contact information */}
          <div className="contactHeading">
            <div className="contactPageText">
              <div className="contactPageText">
                <h2>Office address in China:</h2>
                <p>Dongguang Country, Cangzhou City, Hebel Province, China</p>
              </div>

              <div className="contactPageText">
                <h2>E-mail:</h2>
                <Link to="/"> tajsteel567@gmail.com</Link>
              </div>
              <div className="contactPageText">
              <h2>Telephone:</h2>
              <Link to="/" className="links"> Tel: +8617 813 089921 </Link> 
              <br />
              <Link to="/" className="links"> WhatsApp: +7964 809 8632</Link>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403076.0798950185!2d116.34748727033855!3d37.88293727299545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35e923b9580345f7%3A0xebc662e4ce330b0!2sDongguang%20County%2C%20Cangzhou%2C%20Hebei%2C%20China!5e0!3m2!1sen!2s!4v1726483775786!5m2!1sen!2s"
                width="500"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Banner section for contact form */}
          <div className="contactBanner">
            <div className="contactBannerText">
              <h2>Contact us</h2>
              <p>
                Please fill out this form if you have any questions, need more
                information, or need assistance with your order.
              </p>
            </div>

            {/* Contact form section */}
            <div className="contactform">
              {/* Display status message if available */}
              {status && (
                <div
                  style={{
                    background: "#e5750f",
                    width: "50%",
                    padding: "5px",
                    margin: "20px auto",
                    textAlign: "center",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  {status}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="form">
                  <div className="detailcontact">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="textArea">
                    <div>
                      <textarea
                        placeholder="Your message"
                        name="describe"
                        value={formData.describe}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="btn">
                  <button type="submit" className="formBtn">
                    Send a message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Render the Footer component */}
      <Footer />
    </>
  );
};

// Export the ContactForm component
ContactForm;
