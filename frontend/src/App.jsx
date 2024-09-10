import { CertificatePage } from "./certificate"; // Importing the CertificatePage component for rendering certificate-related content
import { ContactForm } from "./contactUsPage"; // Importing the ContactForm component for handling contact form submissions
import { Detailes } from "./detailes"; // Importing the Detailes component for displaying detailed information about a product or service
import { HomePage } from "./home"; // Importing the HomePage component as the main landing page
import { IncomPage } from "./incom"; // Importing the IncomPage component, which might be related to income or a specific section
import { Service1Page } from "./service1"; // Importing the Service1Page component for the first service page
import { Service2Page } from "./service2"; // Importing the Service2Page component for the second service page
import { Routes, Route } from "react-router-dom"; // Importing Routes and Route components from react-router-dom for routing

function App() {
  return (
    <>
      {/* Routing configuration for the application */}
      <Routes>
        {/* Route for the home page */}
        <Route exact path="/" element={<HomePage />} />
        {/* Alternative route for the home page */}
        <Route exact path="/home" element={<HomePage />} />
        {/* Route for the first service page */}
        <Route exact path="/service1" element={<Service1Page />} />
        {/* Route for the second service page */}
        <Route exact path="/service2" element={<Service2Page />} />
        {/* Route for the incom page */}
        <Route exact path="/incom" element={<IncomPage />} />
        {/* Route for the certificate page */}
        <Route exact path="/certificate" element={<CertificatePage />} />
        {/* Route for the contact form page */}
        <Route exact path="/contact" element={<ContactForm />} />
        {/* Route for the details page, with dynamic segment for the product or service ID */}
        <Route exact path="/detailes/:id" element={<Detailes />} />
      </Routes>
    </>
  );
}

export default App; // Exporting the App component as the default export for use in the application
