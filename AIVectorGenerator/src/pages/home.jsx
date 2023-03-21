import {Box} from '@mui/material'
import { NavBar, Header } from '../components/home.component'



export const Home = ()=>{


    return (
        <Box sx={{width: '100%', height: '100vh'}}>
            <NavBar/>
            <Header />
        </Box>
    )
}