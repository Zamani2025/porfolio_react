import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactUsPage from "../pages/ContactUsPage";
import SkillsPage from "../pages/SkillsPage";
import ServicesPage from "../pages/ServicesPage";
import PortfolioPage from "../pages/PortfolioPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "contact",
                element: <ContactUsPage />
            },
            {
                path: "skills",
                element: <SkillsPage />
            },
            {
                path: "service",
                element: <ServicesPage />
            },
            {
                path: "portfolio",
                element: <PortfolioPage />
            },
        ],
    },
]);

export default routes;