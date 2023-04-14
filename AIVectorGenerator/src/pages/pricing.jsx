import { Box, Typography, Grid, Button } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { HowItWorksCompo, LicenseCompo } from "../components/pricing.component";
import { useNavigate } from "react-router-dom";





export const Pricing = ()=>{


    const navigation = useNavigate()
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
        </Box>
    )
}