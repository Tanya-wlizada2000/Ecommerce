import { useParams } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { carts } from "./service1";
import "./detailes.css";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

const Detailes = () => {
  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };

  // Retrieve the `id` parameter from the URL
  const { id } = useParams();
  
  // Find the item with the matching ID from the `carts` array
  const item = carts?.find((item) => item.id === parseInt(id));

  // Log the item to the console for debugging
  console.log(item, "item");

  return (
    <>
      {/* Render the Header component */}
      <Header />

      {/* Main container for the detail view */}
      <div className="container">
        <div className="itemsContainer">
          {/* Scroll to top button */}
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
          {/* Details section */}
          <div className="details">
            <div key={item.id}>
              <h1>{item.heading}</h1> {/* Display item heading */}
              <img src={item.image} alt="item image" /> {/* Display item image */}
              <p>{item.pragh}</p> {/* Display item description */}
            </div>
          </div>
        </div>
      </div>

      {/* Render the Footer component */}
      <Footer />
    </>
  );
};

export { Detailes };
