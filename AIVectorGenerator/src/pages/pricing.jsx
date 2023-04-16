import { Box, Typography, Grid, Button, TextField, CircularProgress} from "@mui/material";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { HowItWorksCompo, LicenseCompo } from "../components/pricing.component";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";





export const Pricing = ()=>{
    const navigation = useNavigate()
    const [code, setCode] = useState("")
    const [loading, setLoading] = useState(false)

    const checkPromoCode = async ()=>{
        if(code.length == 0 ){
            toast.warn("You need to insert a promo code", {
                position: toast.POSITION.TOP_CENTER
              });
        }else {
            const user = localStorage.getItem('user')
            const parsedUser = JSON.parse(user)
            console.log(parsedUser);
            setLoading(true)
            const checkCode = await axios.post('https://starfish-app-o44bp.ondigitalocean.app/api/checkPromocode',{
                code: code,
                name: parsedUser.name
            })
            console.log(checkCode.data.done);
                if(checkCode.data.done){
                    console.log(checkCode);
                    localStorage.setItem('user', JSON.stringify({
                        name: checkCode.data.user.name,
                        id: checkCode.data.user.id,
                        tokens: checkCode.data.user.tokens,
                        image: checkCode.data.user.image,
                    }))
                    toast.success("yeey you will receive your free tokens", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    setTimeout(()=>{
                        navigation(0)
                    }, 2000)
                }else if(!checkCode.data.done){
                    toast.error("some error occured please try again later", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            setLoading(false)
        }

    }


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 180,
        width: {xs: '95%', md: '70%', lg: '60%'},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center ',
        justifyContent: 'center'
      }));


    return (
        <Box sx={{backgroundColor: '#F6F6F6', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ToastContainer autoClose={2000}/>
            <Typography marginTop={5} textAlign={'center'} lineHeight={1.3} variant="h4" fontWeight={600} color={'black'}>
                Get the tokens to create stunning illustrations.
            </Typography>
            <Typography  textAlign={'center'} lineHeight={1.3} variant="overline" fontWeight={600} color={'black'}>
                Pick the bundle that's perfect for your need:
            </Typography>

            <Box sx={{width: {xs: '70%', md: '50%', lg: '60%', marginTop: 30}}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={6}>
                        <Item>
                            <Typography variant="h5" color={'black'} fontWeight={'700'}>
                                Personal Bundle
                            </Typography>
                            <Typography style={{marginTop: 10}} variant="button" color={'black'} fontWeight={'500'}>
                                Get <b style={{textDecoration: 'underline'}}>50 tokens</b> to generate beautiful illustrations for your project
                            </Typography>

                            <Button onClick={()=>{
                                const user = localStorage.getItem('user')
                                if(user == null){
                                    if(confirm("you're not logged in please try to login")){
                                        navigation('/login')
                                    }else{
                                        navigation('/')
                                    }
                                }else {
                                    localStorage.setItem('bundle', JSON.stringify({
                                        name: "Personal Bundle",
                                        price: 6,
                                        tokens: 50
                                    }))
                                    navigation('/payment')
                                }
                            }} variant="contained" style={{width: '80%', backgroundColor: '#5D13E7', color: 'white', marginTop: 10}} size='medium'>
                                Buy for 6$
                            </Button>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Item>
                            <Typography variant="h5" color={'black'} fontWeight={'700'}>
                                Growth Bundle
                            </Typography>
                            <Typography style={{marginTop: 10}} variant="button" color={'black'} fontWeight={'500'}>
                                Get <b style={{textDecoration: 'underline'}}>200 tokens</b> to generate beautiful illustrations for your project
                            </Typography>

                            <Button onClick={()=>{
                                const user = localStorage.getItem('user')
                                if(user == null){
                                    if(confirm("you're not logged in please try to login")){
                                        navigation('/login')
                                    }else{
                                        navigation('/')
                                    }
                                }else {
                                    localStorage.setItem('bundle', JSON.stringify({
                                        name: "Growth Bundle",
                                        price: 18,
                                        tokens: 200
                                    }))
                                    navigation('/payment')
                                }
                            }} variant="contained" style={{width: '80%', backgroundColor: '#5D13E7', color: 'white', marginTop: 10}} size='medium'>
                                Buy for 18$
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <HowItWorksCompo />
            <LicenseCompo />
            <Box sx={{width: {xs: '100%', md: '60%', lg: '35%'}, height: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5}}>
                <Typography textAlign={'center'} variant="h4" color={'black'} fontWeight={'700'}>
                    Free Tokens ?
                </Typography>
                <Typography color={'black'} variant="body2">
                    Insert promo code and get free tokens
                </Typography>

                <TextField size="small" sx={{width: '100%', marginTop: 2, marginBottom: 2}} placeholder="example-36182397" value={code} onChange={(e)=>{
                    setCode(e.target.value)
                }}/>

                <Button onClick={checkPromoCode} variant="contained" sx={{width: '100%', backgroundColor: '#5D13E7'}}>
                    {loading ?
                        <CircularProgress  style={{color: 'white'}}size={25}/>
                    : !loading && "Submit"}
                </Button>
            </Box>
        </Box>
    )
}