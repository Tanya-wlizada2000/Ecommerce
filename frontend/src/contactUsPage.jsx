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
        <a onClick={scrollToTop} style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 99,
        cursor: "pointer",
        padding: "5px",
        borderRadius: "50%",
        color: "white",
        background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%)",
      }}>
        <FaArrowUp size={40} /> {/* Scroll to top icon */}
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
          {/* Section for contact information */}
          <div className="contactHeading">
            <div className="contactPageText">
              <h2>Office address in Ukraine:</h2>
              <p>40031, metro station Sumi, ave. Peremogi, 147/4</p>
            </div>

            <div className="contactPageText">
              <h2>E-mail:</h2>
              <Link to="/">sales.ua@gualapack.com</Link>
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
              {status && <div style={{
                background:"#e5750f",
                width:"50%",
                padding:"5px",
                margin:"20px auto",
                textAlign:"center",
                color:"white",
                fontWeight:"600",
              }}>{status}</div>}
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
