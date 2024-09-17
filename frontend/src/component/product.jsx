import "./product.css"; // Importing the CSS file for styling the Product component
import { ProductCarts } from "./productCarts"; // Importing the ProductCarts component for displaying individual products

// Array of product data
const carts = [
  {
    id: 1,
    heading: "China Custom DOY PACK Zipper Bag for",
    pragh: "Candy Sweet Chocolate Food Packaging",
    image: "/Group1.png",
  },
  {
    id: 2,
    heading: "DOY PACK Food Grade ",
    pragh: "Stand Up Zipper Pouch 500g Plastic Packaging Bag",
    image: "/Group2.png",
  },
];

// Product component for rendering a list of products
const Product = () => {
  return (
    <>
      <div className="productItem">
        {/* Container for the product section */}
        <div className="productHeading">
          {/* Heading for the product section */}
          <h2>Product</h2>
        </div>

        {/* Placeholder div for potential additional content or styling */}
        <div className="cartsprodauct"></div>

        {/* Container for mapping and rendering each product */}
        <div className="cartspro">
          {carts.map((cart) => (
            <ProductCarts
              key={cart.id} // Unique key for each ProductCarts component for efficient rendering
              id={cart.id} // Passing product ID to ProductCarts component
              heading={cart.heading} // Passing product title to ProductCarts component
              // Passing product description to ProductCarts component
              image={cart.image} // Passing product image filename to ProductCarts component
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { Product }; // Exporting the Product component for use in other parts of the application
