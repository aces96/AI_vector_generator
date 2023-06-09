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
import { PromoCodePageLogin } from "../pages/promoCode.login";
import { Dashboard } from "../pages/dashboard";




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
                    if(user == null){
                        return null
                    }else {

                        const history = await axios.post('https://starfish-app-o44bp.ondigitalocean.app/api/getHistory',{user: user.id})
                        const url = new URL(request.url);
                        const prompt = url.searchParams.get("prompt");
                        console.log("yeeeey", history);
                            return {
                                data: user
                                ,prompt: prompt
                                ,history: history.data.data 
                            }
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
    {
        path: '/dash_login',
        element: <PromoCodePageLogin />
    },
    {
        path: '/dashboard_admin',
        element: <Dashboard />,
        loader: ()=>{
            const data = localStorage.getItem('admin')
            const user = JSON.parse(data)
            return data
        }
    }
])
