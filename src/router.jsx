import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Realtor from "./pages/Realtor";
import Buyer from "./pages/Buyer";
import BuildingQuot from "./pages/BuildingQuote";
import Faq from "./pages/Faq";
import OurService from "./pages/OurServices";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: "/about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "our_services",
                element: <OurService/>
            },
            {
                path: "/realtor",
                element: <Realtor />
            },
            {
                path: "/buyer",
                element: <Buyer />
            },
            {
                path: "/build",
                element: <BuildingQuot/>
            }
            ,
            {
                path: "/faq",
                element:<Faq/>
            }
        
        ],
    },
]);

export default router;
