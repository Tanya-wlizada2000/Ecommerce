// Importing components that will be used in the MainPage component
import { MainCompany } from "./component/mainCompany";
import { ProAdvan } from "./component/proAdvan";
import { Product } from "./component/product";

// Define the MainPage component
const MainPage = () => {
    return (
        <>
            {/* Container div that holds all the content */}
            <div className="container">
                {/* Inner div to limit the maximum width and center the content */}
                <div className="itemsContainer">
                    {/* Rendering the MainCompany component */}
                    <MainCompany />
                    {/* Rendering the Product component */}
                    <Product />
                    {/* Rendering the ProAdvan component */}
                    <ProAdvan />
                </div>
            </div>
        </>
    );
}

// Exporting the MainPage component to be used in other parts of the application
export { MainPage };
