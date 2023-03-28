import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { margin } from "@mui/system";
import img from '../assets/img.png'




export const Profil = ()=>{

    return (
        <Box sx={{width: {xs: '100%', md: '100%', lg: '90%'}, height: '92%', margin: 'auto'}}>
            <Grid spacing={2} container >
                <Grid item xs={12} md={5} lg={5}>
                    <Box sx={{width: '100%', height: 350, display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'space-between', marginTop: 2}}>
                        <img src={img} style={{width: 120, height: 120, borderRadius: 60}} />
                        <Typography fontWeight={600} color={'black'} variant="h6">
                            email@gmail.com
                        </Typography>
                        <Box sx={{width: 120, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: 'white'}}>
                            <Typography fontSize={18} variant="caption" color={'black'}>
                                31 Tokens
                            </Typography>
                        </Box>
                        <Button style={{color: 'black'}} variant="text">
                            Recharge
                        </Button>
                        <Button style={{backgroundColor: '#FF0303', color: 'white', width: 200}}  variant="contained">Signout</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Typography variant="h6" color={'black'} fontWeight={600} marginTop={3}>
                            Purchase History
                        </Typography>

                        <Paper sx={{width: 270, height: 100, marginTop: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Typography marginLeft={1} variant="body2" color={'black'} >
                                    Bundle: <b>Personal</b>
                                </Typography>
                                <Typography marginRight={1} fontWeight={600} variant="body2" color={'black'}>
                                    6.00$
                                </Typography>
                            </Box>
                            <Typography textAlign={'center'} color={'black'} variant="body2">
                                28/03/2023 03:55
                            </Typography>
                            <Typography textAlign={'center'} color={'black'} variant="body2">
                                id: 463292347402
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}