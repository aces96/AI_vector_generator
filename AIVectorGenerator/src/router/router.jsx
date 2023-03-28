import { Children } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";

import { Home } from "../pages/home";
import { LandingPage } from "../pages/landingPage";
import { Pricing } from "../pages/pricing";
import { Collection } from "../pages/collection";
import { Profil } from "../pages/profil";




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
            },
            {
                path: 'collection',
                element: <Collection />
            },
            {
                path: 'profil',
                element: <Profil />
            },
        ]
    },
    {
        path: '/pricing',

    }
])
