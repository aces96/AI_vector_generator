import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { margin } from "@mui/system";
import img from '../assets/img.png'
import { NotLoggedIn } from "../components/error.components";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";




export const Profil = ()=>{

    const user = useLoaderData()
    const navigation = useNavigate()

    return (
        <Box sx={{width: {xs: '100%', md: '100%', lg: '90%'}, height: '92%', margin: 'auto'}}>
            {user == null  ?
                <NotLoggedIn/>
            : 
            <Grid spacing={2} container >
                <Grid item xs={12} md={5} lg={5}>
                    <Box sx={{width: '100%', height: 350, display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'space-between', marginTop: 2}}>
                        <img src={user.image} style={{width: 120, height: 120, borderRadius: 60}} />
                        <Typography fontWeight={600} color={'black'} variant="h6">
                            {user.name}
                        </Typography>
                        <Box sx={{width: 120, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: 'white'}}>
                            <Typography fontSize={18} variant="caption" color={'black'}>
                                {user.tokens}Tokens
                            </Typography>
                        </Box>
                        <Button onClick={()=>{
                            navigation('/pricing')
                        }} style={{color: 'black'}} variant="text">
                            Recharge
                        </Button>
                        <Button onClick={()=>{
                            localStorage.removeItem('user')
                            navigation(0)
                        }} style={{backgroundColor: '#FF0303', color: 'white', width: 200}}  variant="contained">Signout</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {user.bundle == 'none' ? 
                            <Box></Box>
                        : user.bundle == 'Personal Bundle' || user.bundle == 'Growth Bundle ' &&<>
                        <Typography variant="h6" color={'black'} fontWeight={600} marginTop={3}>
                        Purchase History
                    </Typography>

                    <Paper sx={{width: 270, height: 100, marginTop: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Typography marginLeft={1} variant="body" color={'black'} >
                                <b>{user.bundle}</b>
                            </Typography>
                        </Box>
                        
                    </Paper>
                    </>
                        }
                    </Box>
                </Grid>
            </Grid>
            }
        </Box>
    )
}