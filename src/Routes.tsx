import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/home";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";
import Layout from "./Layout/Layout/Layout";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children : [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path : '*',
        element : <NotFound />
    }
])

export default Routes;