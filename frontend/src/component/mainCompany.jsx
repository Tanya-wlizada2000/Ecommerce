import { CompanyCards } from "./companyCards"; // Import the CompanyCards component
import "./mainCompany.css"; // Import the CSS file for styling
import { NavbarButton } from "./navbarButton"; // Import the NavbarButton component
import { Link } from "react-router-dom";

// Sample data for the first set of company cards
const cardsData = [
  {
    id: 1,
    img: "hourglass.svg", // Image file for the card
    head: "For more than 11 years", // Heading for the card
    pragh: "we have been developing and manufacturing packaging solutions", // Paragraph text for the card
  },
  {
    id: 2,
    img: "team.svg", // Image file for the card
    head: "102 + employees", // Heading for the card
    pragh:
      "produce flexible packaging for customers around the world we care about the environment and recycling", // Paragraph text for the card
  },
];

// Sample data for the second set of company cards
const data = [
  {
    id: 3,
    img: "product-development.svg", // Image file for the card
    head: "11 production sites", // Heading for the card
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
          <h3>Worldwide Trusted Packaging Supplier</h3>
          {/* Paragraph describing the company's products and commitment */}
          <p>
            With 31 years experience in packaging field, DQ PACK embraces the
            philosophy, aiming at striving to become the best partner from the
            local market for global customers and suppliers. Our stand-up
            pouches and printed roll stock films are exported to over 1200
            customers from more than 140 countries and regions including USA,
            UK, Mexico, Ukraine,
            <br />
            <br />
            Turkey, Australia, Cameroon, Libya, Pakistan, etc., and are
            particularly appreciated and highly trusted by our customers
            worldwide. We also have partnered with many world’s renowned
            beverage manufacturers to develop flexible packaging solutions. As a
            leading flexible packaging company with self-run export right in the
            local printing market, DQ PACK has set up branches in Malaysia and
            Hong Kong respectively. learn more
            <br />
            <br />
            {/* Render NavbarButton with the title prop */}
            <Link to="/incom">
              <NavbarButton title={"About the company"} />
            </Link>
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
