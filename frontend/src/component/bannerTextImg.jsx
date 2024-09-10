// Import the NavbarButton component from the local file
import { NavbarButton } from "./navbarButton";

// Import the CSS file for styling the banner
import "./headerBanner.css";
import { Link } from "react-router-dom";


// Define the BannerTextImg component that takes image, heading, and description as props
const BannerTextImg = ({ image, heading, description }) => {

  // Define a constant title to be passed as a prop to NavbarButton
  const title = "Read More";
  
  // Log the heading to the console for debugging purposes
  console.log(heading, "heading");

  return (
    <div className="bannerItem">
      {/* Render the image with alt text */}
      <img src={image} alt="product-img" />

      <div className="bannerText">
        {/* Render the heading as an h1 element */}
        <h1>{heading}</h1>
        
        {/* Render the description as a paragraph */}
        <p>{description}</p>
        
        {/* Render the NavbarButton component with the title prop */}
        <Link to="/home"><NavbarButton title={title}/></Link>
      </div>
    </div>
  );
};

// Export the BannerTextImg component for use in other parts of the application
export { BannerTextImg };
