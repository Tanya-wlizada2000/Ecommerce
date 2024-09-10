import './product.css'; // Importing the CSS file for styling the Product component
import { ProductCarts } from './productCarts'; // Importing the ProductCarts component for displaying individual products

// Array of product data
const carts = [
    {
        id: 1, // Unique identifier for the product
        heading: "Roll Packaging", // Title of the product
        pragh: "Our products are successfully used by manufacturing companies in various industries.", // Product description
        image: "cat-preview-1-1.png", // Filename of the product image
    },
    {
        id: 2, // Unique identifier for the product
        heading: "Ready-made", // Title of the product
        pragh: "Our products are successfully used by manufacturing companies in various industries.", // Product description
        image: "cat-preview-1-1.png", // Filename of the product image
    },
]

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
               <div className="cartsprodauct">
               </div>
               
               {/* Container for mapping and rendering each product */}
               <div className="cartspro">
                   {carts.map((cart) => (
                       <ProductCarts   
                           key={cart.id} // Unique key for each ProductCarts component for efficient rendering
                           id={cart.id} // Passing product ID to ProductCarts component
                           heading={cart.heading} // Passing product title to ProductCarts component
                           pragh={cart.pragh} // Passing product description to ProductCarts component
                           image={cart.image} // Passing product image filename to ProductCarts component
                       />
                   ))}
               </div>
           </div>
       </>
   );
}

export { Product }; // Exporting the Product component for use in other parts of the application
