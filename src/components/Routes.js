import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Coctails from "./Coctails";
import Home from "./Home";
import Main from "./Main";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/home', element: <Home></Home> },
            {
                path: '/coctails',
                element: <Coctails></Coctails>,
                loader: async () => {
                    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                }
            },
            { path: '/about', element: <About></About> }
        ]
    }
])