import { Box, Paper, Typography } from "@mui/material";
import backgroundImg from '../assets/background.png';
import '@fontsource/roboto/700.css';
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Success = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const navigation = useNavigate()

    useEffect(()=>{
        const name = searchParams.get('name')
        const image = searchParams.get('image')
        const id = searchParams.get('id')
        const tokens = searchParams.get('tokens')

        localStorage.setItem('user', JSON.stringify({
            name: name,
            id: id,
            image: image,
            tokens: tokens
        }))

        setTimeout(()=>{
            navigation('/')
        }, 2000)
    },[])



    return (
        <Box sx={{width: '100%', height: '100vh', background: `url(${backgroundImg})`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper sx={{width: {xs: '100%', md: '90%', lg: "40%"}, height: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography textAlign={'center'} color={'#5FD068'} variant="h6">
                    You have successfully logged in. You will be redirected shortly.
                </Typography>
            </Paper>
        </Box>
    )
}