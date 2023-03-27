import { Box, Typography, Grid, Paper, IconButton, Card, CardActionArea, CardContent } from "@mui/material";
import { ReactComponent as Svg }  from '../assets/pic.svg'
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '70%',
    width: '70%'
  }));



export const SvgDisplayCompo = ()=>{


    return (
        <Box sx={{width: "100%", height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography marginTop={2} variant="overline" color={'black'} fontWeight='600'>
                    "this the place for the user prompt"
                </Typography>

                <Box>
                <Grid container spacing={2}>
                    <Grid display={'flex'}  justifyContent={'center'} item xs={12} md={6} lg={4}>
                        <Item>
                            <Svg style={{width: '100%', height: '100%'}}/>
                        </Item>
                    </Grid>
                    <Grid display={'flex'}  justifyContent={'center'} item xs={12} md={6} lg={4}>
                        <Item>
                            <Svg style={{width: '100%', height: '100%'}}/>
                        </Item>
                    </Grid>
                    <Grid display={'flex'}  justifyContent={'center'} item xs={12} md={6} lg={4}>
                        <Item>
                            <Svg style={{width: '100%', height: '100%'}}/>
                        </Item>
                    </Grid>
                </Grid>
                </Box>
        </Box>
    )
}


export const CollectionSideBar = ()=>{


    return (
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant="h5" color={'black'} fontWeight={'800'} marginTop={3}>
                Request History
            </Typography>


            <Card sx={{width: '80%', height: 150, marginBottom: 3}}>
                        <CardContent>
                        <CardActionArea>
                            <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant="h6" fontSize={18} fontWeight={'600'} color={'black'} textAlign={'center'}>
                                    "this some prompt that the user generated "
                                </Typography>
                                <Typography>
                                    27/03/2023 11:01pm
                                </Typography>
                            </Box>
                        </CardActionArea>
                        </CardContent>
            </Card>
            <Card sx={{width: '80%', height: 150}}>
                        <CardContent>
                        <CardActionArea>
                            <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant="h6" fontSize={18} fontWeight={'600'} color={'black'} textAlign={'center'}>
                                    "this some prompt that the user generated "
                                </Typography>
                                <Typography>
                                    27/03/2023 11:01pm
                                </Typography>
                            </Box>
                        </CardActionArea>
                        </CardContent>
            </Card>


        </Box>
    )
}