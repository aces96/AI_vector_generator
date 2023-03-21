import {Box} from '@mui/material'
import { NavBar, Header } from '../components/home.component'
import { Outlet } from 'react-router-dom'



export const Home = ()=>{


    return (
        <Box sx={{width: '100%', height: '100vh'}}>
            <NavBar/>
            <Outlet/>
        </Box>
    )
}