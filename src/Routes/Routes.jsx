import { createBrowserRouter, Route } from "react-router";
import Root from "../Root/Root";
import Errror from "../pages/Error/Errror";
import Home from "../pages/Home/Home";

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
            }
        ]
    }
])

export default router;