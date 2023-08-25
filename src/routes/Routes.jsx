import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import AddAToy from "../pages/AddAToy/AddAToy";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:3000/subCategories`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: '/addAToy',
                element: <AddAToy></AddAToy>,
                loader : () => fetch(`http://localhost:3000/subCategories`)
            }
        ]
    }
]);

export default router;