// Import the CSS file for styling the NavbarButton
import './headerBanner.css';

// Define the NavbarButton component that takes a title as a prop
const NavbarButton = ({ title }) => {
    return (
        <>
            {/* Render a button with the class name 'navbar-button' and display the title prop */}
            <button className="navbar-button">{title}</button>
        </>
    );
};

// Export the NavbarButton component for use in other parts of the application
export { NavbarButton };
