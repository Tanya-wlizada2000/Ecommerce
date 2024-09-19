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
            Dongguang Yalei Plastic Industry Co., Ltd. It was founded in 2012
            and is located in Dongguan County, Hebei Province. This is a modern
            private enterprise that combines research and development, design,
            film production, printing, compounding and package production. The
            company was recognized as a member of the Hebei Plastic Packaging
            Association in the first half of 2015. The company occupies an area
            of ​6,000 square meters, including 3,500 square meters of standard
            clean workshops and 15 million yuan in fixed assets. In 2014, it
            passed the national quality certification of food packaging QS and
            the record production qualification of export packaging of food
            products. There are 102 employees, including 6 office employees, 9
            production management employees, 5 R&D employees and 6 quality
            managers. There are 10 network sellers and 5 outstanding designers.
            <br />
            <br />
            The company mainly produces food packaging bags, daily chemical
            packaging bags, three-sided sealed bags, four-sided sealed bags,
            eight-sided sealed bags, delivery bags, zippered bags, pouch bags,
            vacuum bags, plastic bags. aluminum foil, kraft paper, paper window
            bags, which produces and processes retort packaging, packaging for
            basket and dog food, liquid fertilizer bags, rice bags, flour bags,
            PVC labels, shrink labels, bopp film, PVC film, CCP film, aluminized
            film, etc. The company has a complete modern quality management
            system. The integrity, strength and quality of products of Dongguang
            Yalei Plastic Industry Co., Ltd.
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
