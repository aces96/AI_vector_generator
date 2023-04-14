import { Children } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";

import { Home } from "../pages/home";
import { LandingPage } from "../pages/landingPage";
import { Pricing } from "../pages/pricing";
import { Collection } from "../pages/collection";
import { Profil } from "../pages/profil";
import { Login } from "../pages/login";
import { Success } from "../pages/success";
import { Payment } from "../pages/payment";
import axios from "axios";




export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        loader: async ()=>{
            const data = localStorage.getItem('user')
            console.log("yeeeey", data);
            const user = JSON.parse(data)
            return user
        },
        children: [
            {
                path: '/',
                element: <LandingPage/>,
                loader: async ()=>{
                    const data = localStorage.getItem('user')
                    console.log("yeeeey", data);
                    return data
                }
            },
            {
                path: 'pricing',
                element: <Pricing/>
            },
            {
                path: 'collection',
                element: <Collection />,
                loader:  async ({request})=>{
                    const data = localStorage.getItem('user')
                    const user = JSON.parse(data)
                    const history = await axios.post('https://cncvectorlab.com/api/getHistory',{user: user.id})
                    const url = new URL(request.url);
                    const prompt = url.searchParams.get("prompt");
                    console.log("yeeeey", history);
                        return {
                            data: data
                            ,prompt: prompt
                            ,history: history.data.data 
                        }
                }
            },
            {
                path: 'profil',
                element: <Profil />,
                loader: ()=>{
                    const data = localStorage.getItem('user')
                    const user = JSON.parse(data)
                    return user
                }
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/success',
        element: <Success />
    },
    {
        path: '/payment',
        element: <Payment/>,
        loader: ()=>{
            const data = localStorage.getItem('bundle')
            const pricing = JSON.parse(data)

            return pricing
        }
    },
])
