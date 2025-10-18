import { createBrowserRouter, Route } from "react-router";
import Root from "../Root/Root";
import Errror from "../pages/Error/Errror";
import Home from "../pages/Home/Home";
import App from "../pages/App/App";
import Installation from "../pages/installation/Installation";
import AppDaitals from "../Compotent/AppDaitals";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<Errror/>,
        hydrateFallbackElement:<p>Loading...</p>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/app',
                element:<App/>
            },

            {
                path:'/installation',
                element:<Installation/>
            },
            {
                path:'/app/:id',
                element:<AppDaitals/>
            }
        ]
    }
])

export default router;