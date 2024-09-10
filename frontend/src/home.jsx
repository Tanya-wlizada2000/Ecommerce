import { Link } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header" 
import { MainPage } from "./mainpart";
import { FaArrowUp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
 

const HomePage =()=>{
   const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // This will add a smooth scrolling effect
      });
    };

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
    <MainPage />
    < Footer />
    
    </>)
 }

 export {HomePage};