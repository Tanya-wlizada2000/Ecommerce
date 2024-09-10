// Importing the CSS file for styling the component
import './proAdvan.css';

// Importing the ProAdvanCarts component which will be used to display each cart
import { ProAdvanCarts } from './proAdvanCarts';

// Array of objects representing different product advantages
const carts = [
    {
        id: 1,
        img: "badge.svg", // Path to the image for the first advantage
        heading: "High quality of finished products" // Description of the first advantage
    },
    {
        id: 2,
        img: "shield.svg", // Path to the image for the second advantage
        heading: "Safety and hygiene" // Description of the second advantage
    },
    {
        id: 3,
        img: "hourglass (1).svg", // Path to the image for the third advantage
        heading: "Long shelf life of products" // Description of the third advantage
    },
    {
        id: 4,
        img: "recycle.svg", // Path to the image for the fourth advantage
        heading: "Recycling and sustainability" // Description of the fourth advantage
    },
];

// Functional component that displays the product advantages
const ProAdvan = () => {
    return (
        <>
            <div className="advan">
                {/* Container for the heading */}
                <div className="advanHeading">
                    <h1>Product Advantages</h1>
                </div>
                {/* Container for all advantage cards */}
                <div className="AllAdvanCarts">
                    {/* Mapping through the 'carts' array to create a ProAdvanCarts component for each item */}
                    {carts.map((cart) => (
                        <ProAdvanCarts
                            key={cart.id} // Unique key for each component
                            img={cart.img} // Passing image path as a prop
                            heading={cart.heading} // Passing heading as a prop
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

// Exporting the ProAdvan component to be used in other parts of the application
export { ProAdvan };
