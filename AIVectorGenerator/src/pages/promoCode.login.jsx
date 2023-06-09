import { Box, Paper, TextField, Typography, Button, CircularProgress } from "@mui/material";
import { useState, useRef } from "react";
import '@fontsource/roboto/700.css';
import backgroundImg from '../assets/background.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";





export const PromoCodePageLogin = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigate()
    const pass = useRef('')

    const login = async ()=>{
        console.log('heeee', pass.current.value);
        setLoading(true)
        const log = await axios.post('https://starfish-app-o44bp.ondigitalocean.app/api/getAdmin',{
            username: username,
            password: pass.current.value
        }).then((res)=>{
            if(res.status == 200){
                localStorage.setItem('admin', JSON.stringify({
                    admin: res.data.user.username
                }))
                setLoading(false)
                navigation('/dashboard_admin')
            }else{
                setLoading(false)
                toast.error("something wrong check your information if not try again later", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            console.log(res);
        }).catch((err)=>{
            toast.error("something wrong check your information if not try again later", {
                position: toast.POSITION.TOP_CENTER
            });
            console.log(err);
        })
        setLoading(false)
        console.log(log)

        
    }



    return (

        <Box sx={{width: '100%', height: '100vh', background: `url(${backgroundImg})`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ToastContainer autoClose={4000}/>
            <Paper sx={{width: {xs: '100%', md: '80%', lg: '35%'}, height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FEFBF6'}}>
                <Typography  marginTop={2} fontWeight={700} color={'black'} variant={'h4'} textAlign={'center'}>
                    Welcome back
                </Typography>

                <Typography  marginTop={1} marginBottom={2} fontWeight={600} color={'black'} variant={'overline'} textAlign={'center'}>
                    get started
                </Typography>
                <TextField onChange={(e)=>{
                    setUsername(e.target.value)
                }} sx={{width: {xs: '100%', md: '90%', lg: '80%'}, marginBottom: 3}} label='Username' variant='outlined'/>
                <TextField inputRef={pass}sx={{width: {xs: '100%', md: '90%', lg: '80%'}, marginBottom: 3}} label='Password' variant='outlined' type="password"/>
                <Button onClick={login} sx={{width: {xs: '100%', md: '90%', lg: '80%', backgroundColor: '#7149C6'}}} size="large" variant="contained">
                    {loading ?
                        <CircularProgress  style={{color: 'white'}}size={25}/>
                    : !loading && "Login"}
                </Button>
            </Paper>


        </Box>
    )
}