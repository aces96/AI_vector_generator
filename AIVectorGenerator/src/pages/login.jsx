import { Box, Paper, Typography, Button } from "@mui/material";
import '@fontsource/roboto/500.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emojiImg from '../assets/welcomeEmoji.jpg'
import backgroundImg from '../assets/background.png'





export const Login  = ()=>{


    return( 
        <Box sx={{width: '100%', height: '100vh', background: `url(${backgroundImg})`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper sx={{width: '35%', height: 400, backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                <img src={emojiImg} style={{position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, top: -40, width: 80, height: 80, borderRadius: 40, border: '1px solid black'}}/>
                <Typography marginBottom={3} variant="h4">
                    Hi, Welcome
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '95%', alignItems: 'center', marginBottom: 4}}>
                    <span style={{height: 0.5, width: '40%', backgroundColor: 'black'}}></span>
                    <Typography variant="body1">
                        Signin with
                    </Typography>
                    <span style={{height: 0.5, width: '40%', backgroundColor: 'black'}}></span>
                </Box>
                <Box sx={{width: '70%', height: 135, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Button sx={{width: '100%', backgroundColor: '#DB4437', color: 'white'}} variant="contained" startIcon={<GoogleIcon/>}>
                        SignIn using google
                    </Button>
                    <Button sx={{width: '100%', backgroundColor: '#4267B2', color: 'white'}} variant="contained" startIcon={<GoogleIcon/>}>
                        SignIn using google
                    </Button>
                    <Button sx={{width: '100%', backgroundColor: '#0077B5', color: 'white'}} variant="contained" startIcon={<LinkedInIcon/>}>
                        SignIn using google
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}