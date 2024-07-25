import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/home";
import NotFound from "./Pages/NotFound/NotFound";
import Layout from "./Layout/Layout/Layout";
import Projects from "@Pages/Projects/Projects";

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
                path: '/projects',
                element: <Projects />
            }
        ]
    },
    {
        path : '*',
        element : <NotFound />
    }
])

export default Routes;