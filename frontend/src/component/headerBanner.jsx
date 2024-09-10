import Slider from "react-slick";
import "./headerBanner.css"; // Importing CSS styles for the header banner
import { BannerTextImg } from "./bannerTextImg"; // Importing BannerTextImg component for rendering each slide
import { FaInstagram } from "react-icons/fa"; // Importing Instagram icon
import { RiFacebookBoxLine } from "react-icons/ri"; // Importing Facebook icon
import { AiOutlineLinkedin } from "react-icons/ai"; // Importing LinkedIn icon

// Sample banner data for the slider
const bannerData = [
  {
    id: 1,
    img: "/product-images.jpg", // Path to the image
    heading: "Discover the Magic", // Heading text for the banner
    description:
      "Experience the world's most beautiful landscapes in a unique, immersive experience", // Description text for the banner
  },
  {
    id: 2,
    img: "/product-images.jpg",
    heading: "Discover the Magic",
    description:
      "Experience the world's most beautiful landscapes in a unique, immersive experience",
  },
  {
    id: 3,
    img: "/product-images.jpg",
    heading: "Discover the Magic",
    description:
      "Experience the world's most beautiful landscapes in a unique, immersive experience",
  },
  {
    id: 4, // Updated to ensure unique IDs
    img: "/product-images.jpg",
    heading: "Discover the Magic",
    description:
      "Experience the world's most beautiful landscapes in a unique, immersive experience",
  },
];

function Responsive() {
  // Slider settings for react-slick
  const settings = {
    dots: true, // Show dots for navigation
    infinite: false, // Disable infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    initialSlide: 0, // Initial slide index
    responsive: [
      {
        breakpoint: 1024, // Settings for screens 1024px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true, // Enable infinite scrolling
          dots: true,
        },
      },
      {
        breakpoint: 600, // Settings for screens 600px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2, // Start on the third slide
        },
      },
      {
        breakpoint: 480, // Settings for screens 480px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {/* Social Media Icons */}
      <div className="iconsMedia">
        {/* Instagram icon with a link */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        {/* Facebook icon with a link */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <RiFacebookBoxLine size={24} />
        </a>
        {/* LinkedIn icon with a link */}
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin size={24} />
        </a>
      </div>
  
      {/* Slider component with settings */}
      <Slider {...settings}>
        {/* Map through bannerData and render BannerTextImg for each banner */}
        {bannerData.map((banner) => (
          <BannerTextImg
            key={banner.id} // Unique key for each slide
            image={banner.img} // Image URL for the slide
            heading={banner.heading} // Heading text for the slide
            description={banner.description} // Description text for the slide
          />
        ))}
      </Slider>
    </div>
  );
}

export { Responsive }; // Exporting the Responsive component
