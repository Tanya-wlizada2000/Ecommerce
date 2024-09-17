import { useParams } from "react-router-dom";
import { Footer } from "./footer";
// import { carts } from "./service1";\
import "./detailes.css";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { database } from "./db";
import { Navbar } from "./component/navBar";
import { ProductHeader } from "./component/productheader";
import { useState } from "react";

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
  const item = database?.find((item) => item.id === parseInt(id));

  // Log the item to the console for debugging
  console.log(item, "item");

  const [changeImage,setchangeImage] = useState(item.image);


  function changeImg1() {
    setchangeImage(item.img1);
  }

  function changeImg2() {
    setchangeImage(item.img2);
  }

  function changeImg3() {
    setchangeImage(item.img3);
  }

  return (
    <>
      {/* Render the Header component */}
      <Navbar />
      <ProductHeader />

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

          <Link to="/Contact">
            <IoCallOutline
              size={50}
              style={{
                position: "fixed",
                bottom: "80px",
                right: "20px",
                zIndex: 99,
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
                background: "  #e5750f",
              }}
            />
          </Link>
          {/* Details section */}
          <div className="details">
            <div key={item.id} className="detItem">
              <div className="textImg">
               
                <img src={changeImage} alt="item image" />
                {/* Display item image */}
                <div className="changeimage">
                <img src={item.img1} alt="" onClick={changeImg1}/>
                <img src={item.img2} alt="" onClick={changeImg2}/>
                <img src={item.img3} alt="" onClick={changeImg3}/>
              </div>
              </div>
              <div className="text">
                <h2>{item.heading}</h2> {/* Display item heading */}
                <p dangerouslySetInnerHTML={{ __html: item.pragh }} />{" "}
                {/* Display item description */}
              </div>
               
               
              
            </div>

            <div className="specs">
                <h2>Specs</h2>
                <img src="/dis.png" alt="discription" />
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
