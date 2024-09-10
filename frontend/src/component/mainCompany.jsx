import { CompanyCards } from "./companyCards"; // Import the CompanyCards component
import "./mainCompany.css"; // Import the CSS file for styling
import { NavbarButton } from "./navbarButton"; // Import the NavbarButton component
import { Link } from "react-router-dom";

// Sample data for the first set of company cards
const cardsData = [
  {
    id: 1,
    img: "hourglass.svg", // Image file for the card
    head: "For more than 30 years", // Heading for the card
    pragh: "we have been developing and manufacturing packaging solutions", // Paragraph text for the card
  },
  {
    id: 2,
    img: "product-development.svg", // Image file for the card
    head: "11 production sites", // Heading for the card
    pragh: "produce flexible packaging for customers around the world we care about the environment and recycling", // Paragraph text for the card
  },
];

// Sample data for the second set of company cards
const data = [
  {
    id: 3,
    img: "team.svg", // Image file for the card
    head: "350 + employees", // Heading for the card
    pragh: "create the perfect service for our customers", // Paragraph text for the card
  },
  {
    id: 4,
    img: "growth.svg", // Image file for the card
    head: "Sustainability", // Heading for the card
    pragh: "we care about the environment and recycling", // Paragraph text for the card
  },
];

// Define the MainCompany component
const MainCompany = () => {
  return (
    <>
      {/* Container for the main section of the company */}
      <div className="itemsContainer mainItem">
        <div className="mainText">
          {/* Main heading for the company section */}
          <h2>Company</h2>
          {/* Subheading describing the company's leadership in packaging */}
          <h3>
            Gualapack Group is the world leader in the flexible packaging production.
          </h3>
          {/* Paragraph describing the company's products and commitment */}
          <p>
            Our products are successfully used by manufacturing companies in various industries, ranging from food, cosmetics, and household chemicals to packaging for the pharmaceutical industry. 
            <br /><br />
            At Gualapack we are proud to offer a quality and functional product together with our customers, based on the experience with the flexible packaging we produce. We help companies optimize and improve their operating results.
            <br /><br />
            {/* Render NavbarButton with the title prop */}
            <Link to="/incom"><NavbarButton title={"About the company"} /></Link>
          </p>
        </div>
        <div className="companyCards">
          {/* Render the first set of company cards */}
          <div className="cardsItem">
            {cardsData.map((card) => (
              <CompanyCards
                key={card.id} // Unique key for each card
                img={card.img} // Image for the card
                head={card.head} // Heading for the card
                pragh={card.pragh} // Paragraph text for the card
              />
            ))}
          </div>
          {/* Render the second set of company cards */}
          <div className="cardsItem">
            {data.map((item) => (
              <CompanyCards
                key={item.id} // Unique key for each card
                img={item.img} // Image for the card
                head={item.head} // Heading for the card
                pragh={item.pragh} // Paragraph text for the card
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Export the MainCompany component for use in other parts of the application
export { MainCompany };
