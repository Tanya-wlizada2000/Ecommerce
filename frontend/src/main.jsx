// Importing the createRoot function from 'react-dom/client' for rendering the React app
import { createRoot } from 'react-dom/client';
// Importing the main App component which serves as the root of the application
import App from './App.jsx';
// Importing global CSS styles for the application
import './index.css';
// Importing BrowserRouter from 'react-router-dom' to enable routing in the application
import { BrowserRouter } from 'react-router-dom';

// Creating the root element for the React application and rendering the App component inside BrowserRouter
createRoot(document.getElementById('root')).render(
  // BrowserRouter provides routing capabilities to the application
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
