// Importing the CSS file for styling the ProAdvanCarts component
import './proAdvan.css';

// Functional component to display individual advantage cards
const ProAdvanCarts = ({ img, heading }) => {
    return (
        <>
            {/* Container for the entire advantage card */}
            <div className="advanCarts">
                {/* Container for the image section of the card */}
                <div className="advanCartsImg">
                    {/* Rendering the image for the advantage card */}
                    <img src={img} alt="image" />
                </div>
                {/* Container for the text section of the card */}
                <div className="advanCartsText">
                    {/* Displaying the heading text for the advantage card */}
                    <h2>{heading}</h2>
                </div>
            </div>
        </>
    );
}

// Exporting the ProAdvanCarts component to be used in other parts of the application
export { ProAdvanCarts };
