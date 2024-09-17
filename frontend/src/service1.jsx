// Import necessary components and icons
import { ProAdvan } from "./component/proAdvan";
import { ProductCarts } from "./component/productCarts";
import { Footer } from "./footer";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { Navbar } from "./component/navBar";
import { DetailsHeader } from "./component/detailsheader";
import { database } from "./db";

// Sample data for the products to be displayed
export const carts = [
 {/*{
    id: 1,
    heading: "China Custom Doypack Zipper Bag for",
    pragh: "Candy Sweet Chocolate Food Packaging",
    image: "/Group1.png",
  },
  {
    id: 2,
    heading: "DQ PACK Food Grade ",
    pragh: "Stand Up Zipper Pouch 500g Plastic Packaging Bag",
    image: "/Group2.png",
  },
  {
    id: 3,
    heading: "DQ PACK 5L Stand Up Pouch",
    pragh: "with Special Sport for Adblue Liquid Packaging Bag Plastic Doypack",
    image: "/Group3.png",
  },
  {
    id: 4,
    heading: "DQ PACK Sanrio Colorful Packaging Bag Stand Up",
    pragh: "Heat Seal Pouch For Laundry Detergent",
    image: "/Group4.png",
  },
  {
    id: 5,
    heading: "DQ PACK Colorful",
    pragh: " Design 105g Fruit Puree Stand Up Spout Pouch Food Grade Plastic Packaging Bag",
    image: "/Group5.png",
  },
  {
    id: 6,
    heading: "DQ PACK Custom Printed",
    pragh: "590ML Heat Seal Packaging Bag Plastic Liquid Stand Up Pouch For Laundry Detergent",
    image: "/Group6.png",
  },
  {
    id: 7,
    heading: "DQ PACK OEM Design",
    pragh: "Plastic Packaging Bag Matte Surface Laundry Detergent Doypack 1.5L Heat Seal Stand Up Pouch",
    image: "/Group7.png",
  },
  {
    id: 8,
    heading: "DQ PACK 198g Dog Food",
    pragh: "Packaging Plastic Bag Stand Up Zipper Pouch Doypack",
    image: "/Group8.png",
  },*/} 
];

// Functional component for the Service1 page


const Service1Page = () => {

  // Function to scroll to the top of the page with a smooth scrolling effect
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };
  

  const getObjects = () => {
    return database.slice(startIndex, endIndex);
  };

  let startIndex = 0;
  let endIndex = 8;
  const result = getObjects(database, startIndex, endIndex);




  return (
    <>
      {/* Render the Header component at the top of the page */}
      <Navbar />
      < DetailsHeader />

      <div className="container">
        <div className="itemsContainer">
          {/* Scroll-to-top button */}
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
                background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%)",
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

          {/* Container for displaying product carts */}
          <div className="cartspro">
            {result.map((cart) => (
              // Map through the carts array and render a ProductCarts component for each item
              <ProductCarts
                key={cart.id} // Use id as the unique key for each item
                id={cart.id}
                cart={cart}
                heading={cart.heading}
                image={cart.image}
                dis={cart.dis}
                img1=""
                img2=""
                img3=""

              />
            ))}
          </div>

          {/* Description section with inline styling */}
          <div
            style={{
              margin: "20px 0",
              textAlign: "start",
              fontSize: "16px",
              fontWeight: "400",
              padding: "30px",
              color: "#6d6d6d",
              display:"flex",
              justifyContent:"space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <p>
              layer or multi-layer laminate, roll packaging has truly excellent
              properties. Among the practical characteristics, we can highlight
              the following: reliability and durability, lightness, excellent
              tightness and high barrier. Aesthetic properties include a neat
              and presentable appearance. Our roll packaging can be used as:
              ketchup packaging; mayonnaise packaging; sauce packaging; juice
              packaging; puree packaging; packaging for liquid soap and
              toothpaste, etc. Laminated packaging is also soft lids and sachets
              that protect the product from moisture. 
              </p>
              
              <p>
              At the moment, it is almost impossible to find a material that could compete with
              polymers in reliability. Another advantage of this material is its
              affordable price. Flexible roll packaging has been manufactured by
              Gualapack for over eight years. Our equipment allows us to use
              extrusion technology, which gives the film an excellent appearance
              and provides ideal transparency. This also ensures high elasticity
              and puncture resistance. In addition, Gualapack provides
              rotogravure printing and modern lamination services, which allows
              you to create your unique design.
            </p>
          </div>

          {/* Render the ProAdvan component */}
          <ProAdvan />
        </div>
      </div>

      {/* Render the Footer component at the bottom of the page */}
      <Footer />
    </>
  );
};

// Export the Service1Page component to be used in other parts of the application
export { Service1Page };
