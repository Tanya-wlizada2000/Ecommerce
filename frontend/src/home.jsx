import { Link } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header" 
import { MainPage } from "./mainpart";
import { FaArrowUp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { useState } from "react";

const HomePage =()=>{

   {/*  const [isDarkMode, setIsDarkMode] = useState(false); */}// State for dark mode
   const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // This will add a smooth scrolling effect
      });
    };
     
      {/* const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode); // Toggle dark mode
    };
    */}
    return(<>
    
    < Header />
    <a onClick={scrollToTop}><FaArrowUp size={50} style={{
        
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 99,
        cursor: "pointer",
        padding: "10px",
        borderRadius: "50%",
        color: "white",
        background:" linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%)",
        
      }}/></a>

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

       {/* Dark Mode Toggle Button 
       <button
        onClick={toggleDarkMode}
        style={{
          position: "fixed",
          bottom: "140px",
          right: "20px",
          zIndex: 99,
          cursor: "pointer",
          padding: "10px",
          borderRadius: "50%",
          color: "white",
          background: isDarkMode ? "#333" : "#007BFF", // Change background based on mode
        }}
      >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      */}
       <MainPage />
        <Footer />

      {/* Main content and Footer wrapped in a div for dark mode styling 
      <div style={{ backgroundColor: isDarkMode ? "#cadbf4" : "#ffffff", color: isDarkMode ? "#000000" : "#000000", transition: "background-color 0.3s, color 0.3s" }}>
        <MainPage />
        <Footer />
      </div>
    */}
    </>)
 }

 export {HomePage};