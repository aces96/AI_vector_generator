import { Box, Typography, Button } from "@mui/material";
import { ReactComponent as Svg }  from '../assets/login.svg'
import '@fontsource/roboto/700.css';
import { useNavigate } from "react-router-dom";




export const NotLoggedIn = ()=>{

    const navigation = useNavigate()


    return (
        <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Svg style={{width: 250, height: 300}}/>
            <Typography fontWeight={600} color={'black'} variant="h4">
                You're not logged in
            </Typography>
            <Typography marginBottom={4} color={'black'} variant="h6">
                please login to get started
            </Typography>

            <Button onClick={()=>{
                navigation('/login')
            }} size="large" sx={{backgroundColor: '#5D13E7', width: 400}} variant="contained">
                Get Started
            </Button>
        </Box>
    )
}