// Import the Navbar component from the 'component' directory
import { Navbar } from "./component/navBar.jsx";

// Import the CSS files for the Slick carousel library
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import the Responsive component from the 'component' directory
import { Responsive } from "./component/headerBanner.jsx";

// Define the Header component
const Header = () => {
  return (
    <>
      {/* Container div to hold the header components */}
      <div className="container">
        <div className="itemsContainer">

          {/* Render the Navbar component */}
          <Navbar/>

          {/* Render the Responsive component, likely for a header/banner */}
          <Responsive/>
          
        </div>
      </div>
    </>
  );
};

// Export the Header component for use in other parts of the application
export { Header };
