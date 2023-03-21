import { Children } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";

import { Home } from "../pages/home";
import { LandingPage } from "../pages/landingPage";
import { Pricing } from "../pages/pricing";




export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <LandingPage/>
            },
            {
                path: 'pricing',
                element: <Pricing/>
            }
        ]
    },
    {
        path: '/pricing',

    }
])
